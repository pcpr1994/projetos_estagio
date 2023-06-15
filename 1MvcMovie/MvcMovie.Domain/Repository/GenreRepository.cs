using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MvcMovie.Domain.Data;
using MvcMovie.Domain.Models;
using MvcMovie.Domain.Repository.Interface;
using static MvcMovie.Domain.Repository.GenreRepository;

namespace MvcMovie.Domain.Repository
{
    public class GenreRepository : IGenreRepository
    {
        public MvcMovieContext Context { get; }

        public GenreRepository(MvcMovieContext context)
        {
            Context = context;
        }

        public async Task<IEnumerable<Genre>> GetAllAsync()
        {
            return await Context.Genre.ToListAsync();

        }

        public  async ValueTask<Genre?> GetByIdAsync(int id)
        {
            return await Context.Genre.FindAsync(id);
        }

        public async Task<bool> InsertAsync(Genre genre)
        {
            await Context.Genre.AddAsync(genre);
            await Context.SaveChangesAsync();

            return await Task.FromResult(true);
        }

        public async Task<bool> UpdateAsync(Genre genre)
        {
            //var movie = await Context.Movie.FindAsync(id);
            Context.Genre.Update(genre);

            await Context.SaveChangesAsync();

            return await Task.FromResult(true);
        }

        public async Task<bool> DeleteAsync(int? id)
        {
            var x = Context.Genre.Find(id);
            Context.Genre.Remove(x);
            await Context.SaveChangesAsync();
            return await Task.FromResult(true);
        }

     
    }
}
