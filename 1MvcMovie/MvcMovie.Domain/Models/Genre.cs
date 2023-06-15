//using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using MvcMovie;


namespace MvcMovie.Domain.Models;

public class Genre
{

    public int Id { get; set; }

    //[RegularExpression(@"^[A-Z]+[a-zA-Z\s]*$")]
    [Required]
    [StringLength(30)]
    public string? Description { get; set; }


   // public List<Movie>? MovieId { get;set; }

}
