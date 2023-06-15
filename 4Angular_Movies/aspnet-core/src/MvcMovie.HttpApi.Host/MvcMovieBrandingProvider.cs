using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace MvcMovie;

[Dependency(ReplaceServices = true)]
public class MvcMovieBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "MvcMovie";
}
