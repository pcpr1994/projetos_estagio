//using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.Rendering;
using MvcMovie.Domain.Models;

namespace MvcMovie.ViewModels;

public class MovieGenreViewModel
{
    public List<Movie>? Movies { get; set; }

    public SelectList? Genres { get; set; }
    public int? MovieGenre { get; set; }
    public string? SearchString { get; set; }
}