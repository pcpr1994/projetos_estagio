using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using MvcMovie.Domain.Data;
using MvcMovie.Domain.Models;
using MvcMovie.Domain.Repository.Interface;
using MvcMovie.ViewModels;

namespace MvcMovie.Controllers
{
    public class MoviesController : Controller
    {
        //private readonly MvcMovieContext _context;

        public IGenreRepository GenreRepository { get; }

        public IMovieRepository MovieRepository { get; }


        public MoviesController(IGenreRepository genreRepository, 

                                //MvcMovieContext context,
                                IMovieRepository movieRepository)
        {
            GenreRepository = genreRepository;
            //_context = context;
            MovieRepository = movieRepository;  
        }

        /*
        // GET: Movies
        public async Task<IActionResult> Index()
        {
              return _context.Movie != null ? 
                          View(await _context.Movie.ToListAsync()) :
                          Problem("Entity set 'MvcMovieContext.Movie'  is null.");
        }

        public async Task<IActionResult> Index(string searchString)
        {
            if (_context.Movie == null)
            {
                return Problem("Entity set 'MvcMovieContext.Movie'  is null.");
            }

            var movies = from m in _context.Movie
                         select m;

            if (!String.IsNullOrEmpty(searchString))
            {
                movies = movies.Where(s => s.Title!.Contains(searchString));
            }

            return View(await movies.ToListAsync());
        }


        [HttpPost]
        public string Index(string searchString, bool notUsed)
        {
            return "From [HttpPost]Index: filter on " + searchString;
        }

        */


        // GET: Movies
        public async Task<IActionResult> Index(int? movieGenre, string searchString)
        {
            if (await GenreRepository.GetAllAsync() == null)
            {
                return Problem("Entity set 'MvcMovieContext.Movie'  is null.");
            }


            IEnumerable<Movie> moviesQueriable = await MovieRepository.GetListAsync(movieGenre, searchString);
                //_context.Movie
                //                       .Include(g => g.Genre)
                //                       .Where(s => !searchString.IsNullOrEmpty() ? s.Title!.Contains(searchString) : true)
                //                       .Where(x => movieGenre.HasValue ? x.Genreid == movieGenre.GetValueOrDefault() : true);

            // Use LINQ to get list of genres.
            IEnumerable<Genre> genreQuery = await GenreRepository.GetAllAsync();

            var movieGenreVM = new MovieGenreViewModel
            {
                Movies = moviesQueriable.ToList(),
                Genres = new SelectList( genreQuery, nameof(EditGenreViewModel.Id), nameof(EditGenreViewModel.Description))
            };

            return View(movieGenreVM);
        }

        // GET: Movies/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || await MovieRepository.GetByIdAsync((int)id) == null)
            {
                return NotFound();
            }

            var movie = new Movie();

            int id2 = (int)id;
            movie = await MovieRepository.GetByIdAsync(id2);

            var moviedetails = new EditMovieViewModel
            {
                Id = movie.Id,
                Title= movie.Title,
                Rating= movie.Rating,
                ReleaseDate= movie.ReleaseDate,
                Price = movie.Price,
                Genreid= movie.Genreid
            };


            if (moviedetails == null)
            {
                return NotFound();
            }

            return View(moviedetails);
        }

        // GET: c
        public async Task<IActionResult> Create()
        {
            //IQueryable<Genre> genreQuery = from m in _context.Genre
            //                               select m;

            IEnumerable<Genre> genreQuery = await GenreRepository.GetAllAsync();

            var movieGenreVM = new CreateMovieViewModel
            {
                Genres = new SelectList(genreQuery, nameof(EditGenreViewModel.Id), nameof(EditGenreViewModel.Description))

            };

            //
            return View(movieGenreVM);
        }

        // POST: Movies/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Title,ReleaseDate,Genreid,Price,Rating")] CreateMovieViewModel moviecreate)
        {
            Console.WriteLine("AQUI");
            if (ModelState.IsValid)
            {
                Console.WriteLine(moviecreate.Genreid);

                /*query para obter o Id de uma dada descrição
                //var joinResult = (from m in _context.Movie
                //                  join e in _context.Genre
                //                    on m.Genreid equals e.Id
                //                  where e.Id == movie.Genreid
                //                  select new
                //                  {
                //                      e.Id
                //                  });

                // movie.Genreid = joinResult.Append(joinResult);
                //movie.Genreid = 2;
                */

                var movie = new Movie
                {                   
                    Title = moviecreate.Title,  
                    ReleaseDate= moviecreate.ReleaseDate,
                    Genreid= moviecreate.Genreid,
                    Price= moviecreate.Price,
                    Rating= moviecreate.Rating
                };

            await MovieRepository.InsertAsync(movie);
           // await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
            }
            return View(moviecreate);
        }

        // GET: Movies/Edit/5
        public async Task<IActionResult> Edit(int id)
        {
            var movie = await MovieRepository.GetByIdAsync(id);
            if (movie == null)
            {
                return NotFound();
            }

            IEnumerable<Genre> genreQuery = await GenreRepository.GetAllAsync();

            var movieGenreVM = new EditMovieViewModel
            {
                Genres = new SelectList(genreQuery, nameof(EditGenreViewModel.Id), nameof(EditGenreViewModel.Description))

            };

            if (movieGenreVM == null)
            {
                return NotFound();
            }


            return View(movieGenreVM);

        }

        // POST: Movies/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Title,ReleaseDate,Genreid,Price,Rating")] EditMovieViewModel editmovie)
        {
           /* Console.WriteLine($"Bill total:\t{billTotal,8:c}");
            Console.WriteLine($"Id:\t {editmovie.Id}");
            Console.WriteLine($"title \t {editmovie.Title}");
            Console.WriteLine($"Rating \t {editmovie.Rating}");
            Console.WriteLine($"Price \t {editmovie.Price}");
            Console.WriteLine($"ReleaseDate \t {editmovie.ReleaseDate}");
            Console.WriteLine($"Genreid \t {editmovie.Genreid}");*/

            var movie = new Movie
            {
                Id = editmovie.Id,
                Title= editmovie.Title,
                Rating=editmovie.Rating,
                Price=editmovie.Price,
                ReleaseDate=editmovie.ReleaseDate,
                Genreid =editmovie.Genreid

            };

            if (id != movie.Id)
            {
                return NotFound();
            }
            

            if (ModelState.IsValid)
            {
                try
                {
                    await MovieRepository.UpdateAsync(movie);
                   // await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (await MovieRepository.GetByIdAsync(id) != null)
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(editmovie);
        }

        // GET: Movies/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || await MovieRepository.GetByIdAsync((int)id) == null)
            {
                return NotFound();
            }

            var movie = new Movie();

            int id2 = (int)id;

            movie = await MovieRepository.GetByIdAsync(id2);

            var moviedelete = new EditMovieViewModel
            {
                Id = id2,
                Title = movie.Title,
                Rating= movie.Rating,
                ReleaseDate= movie.ReleaseDate,
                Genreid = movie.Genreid,
                Price= movie.Price
            };

            if (moviedelete == null)
            {
                return NotFound();
            }

            return View(moviedelete);
        }

        // POST: Movies/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (await MovieRepository.GetAllAsync() == null)
            {
                return Problem("Entity set 'MvcMovieContext.Movie'  is null.");
            }
            var movie = await MovieRepository.GetByIdAsync(id);
            if (movie != null)
            {
               await MovieRepository.DeleteAsync(id);
            }

            //await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

    }
}
