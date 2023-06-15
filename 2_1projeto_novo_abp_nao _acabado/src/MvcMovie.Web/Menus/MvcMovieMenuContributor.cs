using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MvcMovie.Localization;
using MvcMovie.MultiTenancy;
using MvcMovie.Permissions;
using Volo.Abp.Account.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Identity.Web.Navigation;
using Volo.Abp.SettingManagement.Web.Navigation;
using Volo.Abp.TenantManagement.Web.Navigation;
using Volo.Abp.UI.Navigation;
using Volo.Abp.Users;

namespace MvcMovie.Web.Menus;

public class MvcMovieMenuContributor : IMenuContributor
{
    private readonly IConfiguration _configuration;

    public MvcMovieMenuContributor(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public async Task ConfigureMenuAsync(MenuConfigurationContext context)
    {
        if (context.Menu.Name == StandardMenus.Main)
        {
            await ConfigureMainMenuAsync(context);
        }
        else if (context.Menu.Name == StandardMenus.User)
        {
            await ConfigureUserMenuAsync(context);
        }
    }

    private Task ConfigureMainMenuAsync(MenuConfigurationContext context)
    {
        var administration = context.Menu.GetAdministration();
        var l = context.GetLocalizer<MvcMovieResource>();

        context.Menu.Items.Insert(
            0,
            new ApplicationMenuItem(
                MvcMovieMenus.Home,
                l["Menu:Home"],
                "~/",
                icon: "fas fa-home",
                order: 0
            )
        );

        if (MultiTenancyConsts.IsEnabled)
        {
            administration.SetSubItemOrder(TenantManagementMenuNames.GroupName, 1);
        }
        else
        {
            administration.TryRemoveMenuItem(TenantManagementMenuNames.GroupName);
        }

        administration.SetSubItemOrder(IdentityMenuNames.GroupName, 2);
        administration.SetSubItemOrder(SettingManagementMenuNames.GroupName, 3);

        //criar um menu e um separador na pagina
        context.Menu.AddItem(
            new ApplicationMenuItem(
                "MvcMovie",
                l["Menu:MvcMovies"],
                icon: "fa fa-book"
            ).AddItem(
                new ApplicationMenuItem(
                    "MvcMovies.Movies",
                    l["Movies"],
                    url: "/Movies"
                ).RequirePermissions(MvcMoviePermissions.Movies.Default)
             ).AddItem( // ADDED THE NEW "Genre" MENU ITEM UNDER THE "Movie" MENU
                new ApplicationMenuItem(
                    "MvcMovie.Genres",
                    l["Menu:Genres"],
                    url: "/Genres"
                ).RequirePermissions(MvcMoviePermissions.Genres.Default)
            ).AddItem( // ADDED THE NEW "Author" MENU ITEM UNDER THE "Movie" MENU
                new ApplicationMenuItem(
                    "MvcMovie.Authors",
                    l["Menu:Authors"],
                    url: "/Authors"
                ).RequirePermissions(MvcMoviePermissions.Authors.Default)
            )
          );


        return Task.CompletedTask;
    }

    private Task ConfigureUserMenuAsync(MenuConfigurationContext context)
    {
        var l = context.GetLocalizer<MvcMovieResource>();
        var accountStringLocalizer = context.GetLocalizer<AccountResource>();
        var authServerUrl = _configuration["AuthServer:Authority"] ?? "";

        context.Menu.AddItem(new ApplicationMenuItem("Account.Manage", accountStringLocalizer["MyAccount"],
            $"{authServerUrl.EnsureEndsWith('/')}Account/Manage?returnUrl={_configuration["App:SelfUrl"]}", icon: "fa fa-cog", order: 1000, null, "_blank").RequireAuthenticated());
        context.Menu.AddItem(new ApplicationMenuItem("Account.Logout", l["Logout"], url: "~/Account/Logout", icon: "fa fa-power-off", order: int.MaxValue - 1000).RequireAuthenticated());

        return Task.CompletedTask;
    }
}
