using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace MvcMovie;

[Dependency(ReplaceServices = true)]
public class MvcMovieBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "MvcMovie";
}
