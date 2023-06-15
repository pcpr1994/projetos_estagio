//using Microsoft.AspNetCore.Mvc.Rendering;
//using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using MvcMovie.ViewModels;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace MvcMovie.ViewModels
{
    public class CreateMovieViewModel
    {

        [Required]
        public string? Title { get; set; }

        [Display(Name = "Release Date")]
        [DataType(DataType.Date)]
        public DateOnly ReleaseDate { get; set; }

        [Required]
        public int Genreid { get; set; }

        [Range(1, 100)]
        [DataType(DataType.Currency)]
        [Column(TypeName = "decimal(18, 2)")]
        public decimal Price { get; set; }


        [Required]
        public string? Rating { get; set; }


        //public List<Genre>? Genres { get; set; }

        public SelectList? Genres { get; set; }

    }
}
