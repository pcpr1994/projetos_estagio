using System.ComponentModel.DataAnnotations;

namespace MvcMovie.ViewModels
{
    public class CreateGenreViewModel
    {

        [Required]
        [StringLength(30)]
        public string? Description { get; set; }

    }
}
