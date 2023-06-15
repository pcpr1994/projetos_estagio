using MvcMovie.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace MvcMovie.Web.Pages;

public abstract class MvcMoviePageModel : AbpPageModel
{
    protected MvcMoviePageModel()
    {
        LocalizationResourceType = typeof(MvcMovieResource);
    }
}
