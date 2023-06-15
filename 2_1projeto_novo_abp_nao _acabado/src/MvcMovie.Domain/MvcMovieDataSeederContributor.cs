﻿using System;
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
                imdbId: "0000")
            );

        var a2 = await _authorRepository.InsertAsync(
            await _authorManager.CreateAsync(
                "Jason Reitman",
                DateTime.Parse("1947-09-21"),
                imdbId: "0000")
            );

        var a3 = await _authorRepository.InsertAsync(
            await _authorManager.CreateAsync(
                "Howard Hawks",
                DateTime.Parse("1965-12-31"),
                imdbId: "0000")
            );

        var a4 = await _authorRepository.InsertAsync(
            await _authorManager.CreateAsync(
                "Jézabel Marques",
                DateTime.Parse("1965-12-31"),
                imdbId: "0000")
            );


        //preencher movie
        var x = await _movieRepository.InsertAsync(
        await _movieManager.CreateAsync("When Harry Met Sally",
                                        romCom.Id,
                                        a1.Id,
                                        DateTime.Parse("1989-2-12"),
                                        7.99f,
                                        7.7f,
                                        RuntimeMins: "0",
                                        Plot: "0",
                                        Writers: "0",
                                        Stars: "0",
                                        Countries: "0",
                                        Languages: "0",
                                        IdImdb: "0000",
                                        Awards: "0",
                                        LinkEmbed: "0",
                                        VideoDescription: "0",
                                        LinkPoster1: "0",
                                        LinkPoster2: "0",
                                        Image1: "0",
                                        Image2: "0")
        );

        var y = await _movieRepository.InsertAsync(
        await _movieManager.CreateAsync(
                 "Ghostbusters",
                com.Id,
                a2.Id,
                DateTime.Parse("1984-3-13"),
                8.00f,
                7.1f,
                RuntimeMins: "0",
                                        Plot: "0",
                                        Writers: "0",
                                        Stars: "0",
                                        Countries: "0",
                                        Languages: "0",
                                        IdImdb: "0000",
                                        Awards: "0",
                                        LinkEmbed: "0",
                                        VideoDescription: "0",
                                        LinkPoster1: "0",
                                        LinkPoster2: "0",
                                        Image1: "0",
                                        Image2: "0")
        );

        var z = await _movieRepository.InsertAsync(
        await _movieManager.CreateAsync(
               "Sol",
               we.Id,
               a4.Id,
               DateTime.Parse("1986-2-23"),
               9.99f,
               8f,
               RuntimeMins: "0",
                                        Plot: "",
                                        Writers: "",
                                        Stars: "0",
                                        Countries: "0",
                                        Languages: "0",
                                        IdImdb: "0000",
                                        Awards: "0",
                                        LinkEmbed: "0",
                                        VideoDescription: "0",
                                        LinkPoster1: "0",
                                        LinkPoster2: "0",
                                        Image1: "0",
                                        Image2: "0")

        );

        var q = await _movieRepository.InsertAsync(
        await _movieManager.CreateAsync(
               "Rio Bravo",
               his.Id,
               a3.Id,
               DateTime.Parse("1959-4-15"),
               3.99f,
               6f,
               RuntimeMins: "0",
                                        Plot: "0",
                                        Writers: "0",
                                        Stars: "0",
                                        Countries: "0",
                                        Languages: "0",
                                        IdImdb: "0000",
                                        Awards: "0",
                                        LinkEmbed: "0",
                                        VideoDescription: "0",
                                        LinkPoster1: "0",
                                        LinkPoster2: "0",
                                        Image1: "0",
                                        Image2: "0")
        );


    }

}
