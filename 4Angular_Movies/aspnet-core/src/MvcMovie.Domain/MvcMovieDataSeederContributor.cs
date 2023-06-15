using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using MvcMovie.Movies;
using MvcMovie.Genres;
using System.Diagnostics;
using System.Data;
using MvcMovie.Authors;
using System.Net.NetworkInformation;

namespace MvcMovie;

public class MvcMovieDataSeederContributor
    : IDataSeedContributor, ITransientDependency
{
    private readonly IMovieRepository _movieRepository;
    private readonly IGenreRepository _genreRepository;
    private readonly IAuthorRepository _authorRepository;
    private readonly GenreManager _genreManager;
    private readonly MovieManager _movieManager;
    private readonly AuthorManager _authorManager;


    public MvcMovieDataSeederContributor(
        IMovieRepository movieRepository,
        IGenreRepository genreRepository,
        IAuthorRepository authorRepository,
        GenreManager genreManager,
        MovieManager movieManager,
        AuthorManager authorManager)
    {
        _movieRepository = movieRepository;
        _genreRepository = genreRepository;
        _authorRepository = authorRepository;
        _genreManager = genreManager;
        _movieManager = movieManager;
        _authorManager = authorManager;
    }


    public async Task SeedAsync(DataSeedContext context)
    {
        if (await _movieRepository.GetCountAsync() > 0)
        {
            return;
        }

        if (await _genreRepository.GetCountAsync() > 0)
        {
            return;
        }

        //prencher genre

        var romCom = await _genreRepository.InsertAsync(
            await _genreManager.CreateAsync(
                "Romantic Comedy")
            );

        var com = await _genreRepository.InsertAsync(
            await _genreManager.CreateAsync(
                "Comedy")
            );

        var we = await _genreRepository.InsertAsync(
            await _genreManager.CreateAsync(
                "Western")
            );

        var his = await _genreRepository.InsertAsync(
            await _genreManager.CreateAsync(
                "History")
            );


        //criar authors
        var a1 = await _authorRepository.InsertAsync(
            await _authorManager.CreateAsync(
                "Rob Reiner",
                DateTime.Parse("1958-07-09"),
                imdbId: "")
            );

        var a2 = await _authorRepository.InsertAsync(
            await _authorManager.CreateAsync(
                "Jason Reitman",
                DateTime.Parse("1947-09-21"),
                imdbId: "")
            );

        var a3 = await _authorRepository.InsertAsync(
            await _authorManager.CreateAsync(
                "Howard Hawks",
                DateTime.Parse("1965-12-31"),
                imdbId: "")
            );

        var a4 = await _authorRepository.InsertAsync(
            await _authorManager.CreateAsync(
                "Jézabel Marques",
                DateTime.Parse("1965-12-31"),
                imdbId: "")
            );


        //preencher movie
        var x = await _movieRepository.InsertAsync(
        await _movieManager.CreateAsync(
                "When Harry Met Sally",
                romCom.Id,
                a1.Id,
                DateTime.Parse("1989-2-12"),
                7.99f,
                7.7f,
                RuntimeMins: "",
                Plot: "",
                Writers: "",
                Stars: "",
                Countries: "",
                Languages: "",
                IdImdb: "",
                Awards: "",
                LinkEmbed: "",
                VideoDescription: "",
                LinkPoster1: "",
                LinkPoster2: "",
                Image1: "",
                Image2: "")
                
        );

        var y = await _movieRepository.InsertAsync(
        await _movieManager.CreateAsync(
                 "Ghostbusters",
                com.Id,
                a2.Id,
                DateTime.Parse("1984-3-13"),
                8.00f,
                7.1f,
                RuntimeMins: "",
                Plot: "",
                Writers: "",
                Stars: "",
                Countries: "",
                Languages: "",
                IdImdb: "",
                Awards: "",
                LinkEmbed: "",
                VideoDescription: "",
                LinkPoster1: "",
                LinkPoster2: "",
                Image1: "",
                Image2: "")
        );

        var z = await _movieRepository.InsertAsync(
        await _movieManager.CreateAsync(               
               "Sol",
               we.Id,
               a4.Id,
               DateTime.Parse("1986-2-23"),
               9.99f,
               8f,
               RuntimeMins: "",
                Plot: "",
                Writers: "",
                Stars: "",
                Countries: "",
                Languages: "",
                IdImdb: "",
                Awards: "",
                LinkEmbed: "",
                VideoDescription: "",
                LinkPoster1: "",
                LinkPoster2: "",
                Image1: "",
                Image2: "")

        );

        var q = await _movieRepository.InsertAsync(
        await _movieManager.CreateAsync(
               "Rio Bravo",
               his.Id,
               a3.Id,
               DateTime.Parse("1959-4-15"),
               3.99f,
               6f,
               RuntimeMins: "",
                Plot: "",
                Writers: "",
                Stars: "",
                Countries: "",
                Languages: "",
                IdImdb: "",
                Awards: "",
                LinkEmbed: "",
                VideoDescription: "",
                LinkPoster1: "",
                LinkPoster2: "",
                Image1: "",
                Image2: "")
        );
        //var q2 = await _movieRepository.InsertAsync(
        //await _movieManager.CreateAsync(
        //       "Avatar: The Way of Water",
        //       his.Id,
        //       a3.Id,
        //       DateTime.Parse("2022-12-16 00:00:00.000"),
        //       3.99f,
        //       6f,
        //       RuntimeMins: "192",
        //        Plot: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
        //        Writers: "James Cameron, Rick Jaffa, Amanda Silver",
        //        Stars: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
        //        Countries: "USA",
        //        Languages: "English",
        //        IdImdb: "tt1630029",
        //        Awards: "Won 1 Oscar, 61 wins & 120 nominations total",
        //        LinkEmbed: "https://www.imdb.com/video/imdb/vi3565864217/imdb/embed",
        //        VideoDescription: "Set more than a decade after the events of the first film, 'Avatar: The Way of Water' begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        //        LinkPoster1: "https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        //        LinkPoster2: "https://image.tmdb.org/t/p/original/5ScPNT6fHtfYJeWBajZciPV3hEL.jpg",
        //        Image1: "https://m.media-amazon.com/images/M/MV5BNGExYTkyZDYtYzQ3NC00ZDA5LWJjNjMtNzZkYzdlYzg1MmEwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio1.9000_AL_.jpg",
        //        Image2: "https://m.media-amazon.com/images/M/MV5BOWJmMWRlYTMtMDQ3ZC00ZDI3LWEyNTMtY2FlNDhjODdlMGI0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio1.9000_AL_.jpg")
        //);


    }

}
