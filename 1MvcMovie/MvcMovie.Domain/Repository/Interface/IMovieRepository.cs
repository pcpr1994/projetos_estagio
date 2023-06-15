using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MvcMovie;
using MvcMovie.Domain.Models;

namespace MvcMovie.Domain.Repository.Interface
{
    public interface IMovieRepository
    {

        Task<IEnumerable<Movie>> GetAllAsync();

        Task<IEnumerable<Movie>> GetListAsync(int? movieGenre, string searchString);

        ValueTask<Movie?> GetByIdAsync(int id);

        Task<bool> InsertAsync(Movie movie);

        Task<bool> UpdateAsync(Movie movie);

        Task<bool> DeleteAsync(int? id);

       
    }
}
