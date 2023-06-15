using Microsoft.AspNetCore.Mvc;
using MvcMovie;
using MvcMovie.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MvcMovie.Domain.Repository.Interface
{
    public interface IGenreRepository
    {
     
       Task<IEnumerable<Genre>> GetAllAsync();

        ValueTask<Genre?> GetByIdAsync(int id);

        Task<bool> InsertAsync(Genre genre);

        Task<bool> UpdateAsync(Genre genre);

        Task<bool> DeleteAsync(int? id);


        //Task GetByIdAsync(int? id);

        //IEnumerable<Employee> GetAll();
        //Employee GetById(int EmployeeID);
        //void Insert(Employee employee);
        //void Update(Employee employee);
        //void Delete(int EmployeeID);
        //void Save();

    }
}
