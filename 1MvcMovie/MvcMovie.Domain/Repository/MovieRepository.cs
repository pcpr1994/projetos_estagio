using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MvcMovie.Domain;
using MvcMovie.Domain.Data;
using MvcMovie.Domain.Models;
using MvcMovie.Domain.Repository.Interface;

namespace MvcMovie.Domain.Repository
{
    public class MovieRepository : IMovieRepository
    {
        public MvcMovieContext Context { get; }

        public MovieRepository(MvcMovieContext context)
        {
            Context = context;
        }

        public async Task<IEnumerable<Movie>> GetAllAsync()
        {
            return await Context.Movie.ToListAsync();

        }

        public async ValueTask<Movie?> GetByIdAsync(int id)
        {
            return await Context.Movie.FindAsync(id);

        }

        public async Task<bool> InsertAsync(Movie movie)
        {
            await Context.Movie.AddAsync(movie);
            await Context.SaveChangesAsync();
            return await Task.FromResult(true);

        }

        public async Task<bool> UpdateAsync(Movie movie)
        {
            Context.Movie.Update(movie);
            await Context.SaveChangesAsync();

            return await Task.FromResult(true);

        }

        public async Task<bool> DeleteAsync(int? id)
        {
            var x = Context.Movie.Find(id);
            Context.Movie.Remove(x);
            await Context.SaveChangesAsync();
            return await Task.FromResult(true);
        }

        public async Task<IEnumerable<Movie>> GetListAsync(int? movieGenre, string searchString)
        {
            return await Context.Movie
                                      .Include(g => g.Genre)
                                      .Where(s => string.IsNullOrEmpty(searchString) || s.Title!.Contains(searchString))
                                      .Where(x => movieGenre.HasValue ? x.Genreid == movieGenre.GetValueOrDefault() : true)
                                      .ToListAsync();

        }
    }
}
