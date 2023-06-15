using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace MvcMovie.Web.Pages;

public class IndexModel : MvcMoviePageModel
{
    public void OnGet()
    {

    }

    public async Task OnPostLoginAsync()
    {
        await HttpContext.ChallengeAsync("oidc");
    }
}
