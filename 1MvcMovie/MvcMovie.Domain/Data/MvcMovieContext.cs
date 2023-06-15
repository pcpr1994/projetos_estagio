using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MvcMovie.Domain.Models;
using MvcMovie.Domain;
using MvcMovie;
using Abp.EntityFrameworkCore;

namespace MvcMovie.Domain.Data
{
    public class MvcMovieContext : DbContext
    {
        public MvcMovieContext (DbContextOptions<MvcMovieContext> options)
            : base(options)
        {

        }

        public DbSet<MvcMovie.Domain.Models.Movie> Movie { get; set; } = default!;
        public DbSet<MvcMovie.Domain.Models.Genre> Genre { get; set; } = default!;
    }

    public class MyDbContext : AbpDbContext
    {
        //public DbSet<Product> Products { get; set; }
        public DbSet<MvcMovie.Domain.Models.Movie> Movie { get; set; } = default!;
        public DbSet<MvcMovie.Domain.Models.Genre> Genre { get; set; } = default!;

        public MyDbContext(DbContextOptions<MyDbContext> options)
            : base(options)
        {
        }
    }


}
