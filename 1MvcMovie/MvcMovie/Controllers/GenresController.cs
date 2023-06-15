using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using MvcMovie.Domain.Data;
using MvcMovie.Domain.Models;
using MvcMovie.Domain.Repository;
using MvcMovie.Domain.Repository.Interface;
using MvcMovie.ViewModels;


namespace MvcMovie.Controllers
{
    public class GenresController : Controller
    {
      
        public IGenreRepository GenreRepository { get; }

        public GenresController(IGenreRepository genreRepository)
        {
            GenreRepository= genreRepository;
           
        }

        // GET: Genres
        // function called when the index page opens
        public async Task<IActionResult> Index()
        {
              return GenreRepository.GetAllAsync != null ? 
                          View(await GenreRepository.GetAllAsync()) :
                          Problem("Entity set 'MvcMovieContext.Genre'  is null.");
        }

        // GET: Genres/Details/5
        //function called to show details
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || await GenreRepository.GetByIdAsync((int)id) == null)
            {
                return NotFound();
            }
            var genre = new Genre();

            int id2 = (int)id;

            genre = await GenreRepository.GetByIdAsync(id2);

            var genreedit = new EditGenreViewModel
            {
                Id = genre.Id,
                Description = genre.Description
            };

            if (genreedit == null)
            {
                return NotFound();
            }

            return View(genreedit);
        }

        // GET: Genres/Create
        //function called when you open the page to create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Genres/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        //function called when you click create on the create page
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Description")] CreateGenreViewModel creategenre)
        {

            if (ModelState.IsValid)
            {
                var genre = new Genre
                {
                    Description= creategenre.Description

                };

                bool x;

                x = await GenreRepository.InsertAsync(genre);
                //await GenreRepository.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(creategenre);
        }

        // GET: Genres/Edit/5
        //function called when you open the page to edit
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || await GenreRepository.GetByIdAsync((int)id) == null)
            {
                return NotFound();
            }

            var genre = new EditGenreViewModel()
            {
                Id= id.Value

            };
            if (genre == null)
            {
                return NotFound();
            }
            return View(genre);
        }

        // POST: Genres/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        //function called when you click edit on the edit page
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Description")] EditGenreViewModel genreedit)
        {
            var genre = new Genre 
            {
                Id = genreedit.Id,
                Description= genreedit.Description 
            };

            if (id != genre.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    await GenreRepository.UpdateAsync(genre);
                   // await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    
                    if (await GenreRepository.GetByIdAsync(id) != null)
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
            return View(genreedit);
        }

        // GET: Genres/Delete/5
        //function called when you open the page to delete
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || await GenreRepository.GetByIdAsync((int)id) == null)
            {
                return NotFound();
            }

            var genre = new Genre();

            int id2 = (int)id;

            genre = await GenreRepository.GetByIdAsync(id2);

            var genredelete = new EditGenreViewModel
            {
                Description = genre.Description,
                Id = id2
            };


            //var genre = await _context.Genre
            //    .FirstOrDefaultAsync(m => m.Id == id);
            if (genredelete == null)
            {
                return NotFound();
            }

            return View(genredelete);
        }

        // POST: Genres/Delete/5
        //function called when you click delete on the delete page
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (await GenreRepository.GetAllAsync() == null)
            {
                return Problem("Entity set 'MvcMovieContext.Genre'  is null.");
            }
            var genre = await GenreRepository.GetByIdAsync(id);
            if (genre != null)
            {
                await GenreRepository.DeleteAsync(id);
            }
            
            //await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

    }
}
