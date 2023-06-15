﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MvcMovie.Authors;
using MvcMovie.Genres;
using MvcMovie.MovieAPIs;
using MvcMovie.Movies;
using MvcMovie.Permissions;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Auditing;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace MvcMovie.MovieApiImdb;

[Authorize(MvcMoviePermissions.Movies.Default)]
public class MovieApiImdbAppService : CrudAppService<
    Movie,
    MovieDto,
    Guid,
    GetMovieListDto,
    CreateUpdateMovieDto>,
    ITransientDependency, IMovieApiImdbAppService
{
    private readonly HttpClient _httpClient;
    private readonly IMovieRepository _movieRepository;
    private readonly IGenreRepository _genreRepository;
    private readonly IAuthorRepository _authorRepository;

    public MovieApiImdbAppService(
        IRepository<Movie, Guid> repository,
        IMovieRepository movieRepository,
        IGenreRepository genreRepository,
        IAuthorRepository authorRepository, HttpClient httpClient)
        : base(repository)
    {
        _httpClient = httpClient;
        _movieRepository = movieRepository;
        _genreRepository = genreRepository;
        _authorRepository = authorRepository;
        GetPolicyName = MvcMoviePermissions.Movies.Detail;
        GetListPolicyName = MvcMoviePermissions.Movies.Default;
        CreatePolicyName = MvcMoviePermissions.Movies.Create;
        UpdatePolicyName = MvcMoviePermissions.Movies.Edit;
        DeletePolicyName = MvcMoviePermissions.Movies.Delete;
    }

    private async Task<TitleData> GetMovieDetailsAsync(string imdbId)
    {
        string inicial = "https://imdb-api.com/en/API/Title/k_uc91ugtm/";
        string final = "/Posters,Images,Trailer,";

        string urfinal = $"{inicial}{imdbId}{final}";

        var response = await _httpClient.GetAsync(urfinal);
        if (response.IsSuccessStatusCode)
        {
            var content = await response.Content.ReadAsStringAsync();
            TitleData? apiResponse = JsonConvert.DeserializeObject<TitleData>(content);
            TitleData movie = apiResponse;

            return movie;
        }

        

        return null;
    }

    /// <summary>
    /// para importar do imdb atraves do ID
    /// </summary>
    /// <returns></returns>
    [HttpPost]
    public async Task ImportMovieToIMDBAsync(string idImdb)
    {
        //HttpClient http = new();

        //var url = await _httpClient.GetStringAsync("https://imdb-api.com/en/API/Title/k_uc91ugtm/" + idImdb + "/Posters,Images,Trailer,");
        ////string x = response;
        //Console.WriteLine("////////////////////////////////////////////////////////");
        //Console.WriteLine(url);
        //Console.WriteLine("////////////////////////////////////////////////////////");
        //var response = await _httpClient.GetAsync("https://imdb-api.com/en/API/Title/k_uc91ugtm/" + idImdb + "/Posters,Images,Trailer,");
        //response.EnsureSuccessStatusCode();
        //var content = await response.Content.ReadAsStringAsync();
        //var moviesimdb = JsonConvert.DeserializeObject<TitleData>(content);
        ////var movie = moviesimdb;

        TitleData movie = await GetMovieDetailsAsync(idImdb);
        if(movie ==null)
        {
            Console.Write("vazio");

        }
        
        var moviesimdb = movie;



        //if (movie == null)
        //{
        //    Console.WriteLine("erro");

        //}
        //else
        //{
        // verifica se existe o genre, se nao cria e guarda o id
        var genreid = new Genre();
        string genredes;
        Guid genreID;

        var existingGenre = await _genreRepository.FindAsync(c => c.Description == movie.Genres);

        genredes = movie.Genres.ToString();

        if (existingGenre == null)
        {
            var genreadd = new Genre();
            genreadd.Description = movie.Genres;

            Genre genre = await _genreRepository.InsertAsync(genreadd);

            //genreID = genreadd.Id;

            genreID = genre.Id;
        }
        else
        {
            genreID = await _genreRepository.FindByIdAsync(genredes);
        }


        //verifica se existe o author senao cria, e guarda o id
        //ar authorid = new Author();
        //string authordes;
        Guid authorID;

        var authorList = moviesimdb.DirectorList;

        string x = authorList[0].Id;

        var existingAuthor = await _authorRepository.FindAsync(c => c.ImdbId == x);

        //authordes = movie.Directors.ToString();
        string name = authorList[0].Name;

        if (existingAuthor == null)
        {
            var authoradd = new Author();
            authoradd.Name = name;
            authoradd.ImdbId = x;
            authoradd.Birthday = DateTime.Now;

            Author author = await _authorRepository.InsertAsync(authoradd);


            authorID = author.Id;

        }
        else
        {
            authorID = await _authorRepository.FindByIdAsync(name);
        }

        var dataFormatada = movie.ReleaseDate;
        if (DateTime.TryParse(movie.ReleaseDate, out var data)) dataFormatada = data.ToString("yyyy/MM/dd");


        //BUSCAR ELEMENTOS DA LISTA DA IMAGENS, TRAILER, POSTERS
        //TRAILER
        var trailerList = moviesimdb.Trailer;

        string linkTrailer = trailerList.LinkEmbed;
        string videoDescription = trailerList.VideoDescription;

        if (trailerList == null || trailerList.LinkEmbed == null || trailerList.VideoDescription == null)
        {
            linkTrailer = "";
            videoDescription = "";
        }

        //POSTERS
        var posters = moviesimdb.Posters;
        var postersList = posters.Posters;

        string poster1 = "";
        string poster2 = "";

        if (postersList != null)
        {
            if (postersList.Count == 0)
            {
                poster1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7awOjQbJp4TyD4JQriBSoaUxmreAFG1KcSw&usqp=CAU";
                poster2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7awOjQbJp4TyD4JQriBSoaUxmreAFG1KcSw&usqp=CAU";

            }
            else
            {
                poster1 = postersList[0].Link;
                poster2 = postersList[1].Link;

            }

        }

        //ratting
        float rat;
        if (movie.IMDbRating == null || movie.IMDbRating == "")
        {
            rat = 0;

        }
        else
        {
            rat = float.Parse(movie.IMDbRating);

        }

        //RunMinutos
        string min;
        if (movie.RuntimeMins == null || movie.RuntimeMins == "")
        {
            min = "";

        }
        else
        {
            min = movie.RuntimeMins.ToString();

        }
        //float ratting = float.Parse(movie.IMDbRating);
        //float rat;

        //if(ratting == 0 || ratting == null)
        //{
        //    rat = 0;

        //}
        //else
        //{
        //    rat = float.Parse(movie.IMDbRating);
        //}




        //IMAGENS
        var images = moviesimdb.Images;
        var imagesList = images.Items;

        string image1 = "";
        string image2 = "";

        if (imagesList != null)
        {
            if (imagesList.Count == 0)
            {
                image1 = "";
                image2 = "";

            }
            else
            {
                image1 = imagesList[0].Image;
                image2 = imagesList[1].Image;

            }

        }




        // verifica se existe o movie
        var existingMovie = await _movieRepository.FindAsync(c => c.Title == movie.Title);
        var movieadd = new Movie();

        if (existingMovie == null)
        {

            movieadd.Title = movie.Title;
            movieadd.ReleaseDate = data;
            movieadd.Price = 0;
            movieadd.Rating = rat;
            movieadd.RuntimeMins = min;
            movieadd.Plot = movie.Plot.ToString();
            movieadd.Writers = movie.Writers.ToString();
            movieadd.Stars = movie.Stars.ToString();
            movieadd.Countries = movie.Countries.ToString();
            movieadd.Languages = movie.Languages.ToString();
            movieadd.IdImdb = movie.Id;
            movieadd.Genreid = genreID;
            movieadd.Authorid = authorID;
            movieadd.Awards = movie.Awards.ToString();
            movieadd.LinkEmbed = linkTrailer.ToString();
            movieadd.VideoDescription = videoDescription.ToString();
            movieadd.LinkPoster1 = poster1.ToString();
            movieadd.LinkPoster2 = poster2.ToString();
            movieadd.Image1 = image1.ToString();
            movieadd.Image2 = image2.ToString();





            Movie movieinsert = await _movieRepository.InsertAsync(movieadd);
            Console.WriteLine(movieinsert);


        }
        else
        {
            existingMovie.RuntimeMins = movie.RuntimeMins.ToString();
            existingMovie.Plot = movie.Plot.ToString();
            existingMovie.Writers = movie.Writers.ToString();
            existingMovie.Stars = movie.Stars.ToString();
            existingMovie.Countries = movie.Countries.ToString();
            existingMovie.Languages = movie.Languages.ToString();
            existingMovie.IdImdb = movie.Id;
            existingMovie.Awards = movie.Awards.ToString();
            existingMovie.LinkEmbed = linkTrailer.ToString();
            existingMovie.VideoDescription = videoDescription.ToString();
            existingMovie.LinkPoster1 = poster1.ToString();
            existingMovie.LinkPoster2 = poster2.ToString();
            existingMovie.Image1 = image1.ToString();
            existingMovie.Image2 = image2.ToString();


            Movie movieupdate = await _movieRepository.UpdateAsync(existingMovie);

            Console.WriteLine(movieupdate);
        }


    }

    // }
}

