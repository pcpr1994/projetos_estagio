using Microsoft.EntityFrameworkCore;
using MvcMovie.Domain.Data;
using MvcMovie;
using System;
using System.Linq;
using MvcMovie.Domain.Models;
using Microsoft.Extensions.DependencyInjection;

namespace MvcMovie.Domain.Models;

public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new MvcMovieContext(
       serviceProvider.GetRequiredService<
           DbContextOptions<MvcMovieContext>>()))
        {
            
          
        }

        using (var context = new MvcMovieContext(
            serviceProvider.GetRequiredService<
                DbContextOptions<MvcMovieContext>>()))
        {
            // Look for any movies.
            if (!context.Movie.Any())
            {

                context.Movie.AddRange(
                    new Movie
                    {
                        Title = "When Harry Met Sally",
                        ReleaseDate = DateOnly.Parse("1989-2-12"),
                        Genreid = 2,
                        Rating = "R",
                        Price = 7.99M
                    },
                    new Movie
                    {
                        Title = "Ghostbusters ",
                        ReleaseDate = DateOnly.Parse("1984-3-13"),
                        Genreid = 3,
                        Rating = "C",
                        Price = 8.99M
                    },
                    new Movie
                    {
                        Title = "Ghostbusters 2",
                        ReleaseDate = DateOnly.Parse("1986-2-23"),
                        Genreid = 2,
                        Rating = "C",
                        Price = 9.99M
                    },
                    new Movie
                    {
                        Title = "Rio Bravo",
                        ReleaseDate = DateOnly.Parse("1959-4-15"),
                        Genreid = 3,
                        Rating = "W",
                        Price = 3.99M
                    }
                );
            }

            // Look for any movies.
            if (!context.Genre.Any())
            {

                context.Genre.AddRange(
                    new Genre
                    {
                        Description = "Romantic Comedy"
                    },
                    new Genre
                    {
                        Description = "Comedy"
                    },
                    new Genre
                    {
                        Description = "Western"
                    }
                );
            }

            context.SaveChanges();
        }

       
    }
}