import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { CreateMovieComponent } from './pages/create-movie/create-movie.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MovieIMDBComponent } from './pages/movie-imdb/movie-imdb.component';
import { EditMovieComponent } from './pages/edit-movie/edit-movie.component';
import { CreateGenreComponent } from './pages/create-genre/create-genre.component';
import { CreateAuthorComponent } from './pages/create-author/create-author.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'movie',
    loadChildren: () => import('./pages/movie/movie.module').then(m => m.MovieModule),
  },

  {
    path: 'details', component: DetailsComponent
  },

  { path: 'details/:id', component: DetailsComponent },

  {path: 'createMovie', component: CreateMovieComponent},

  {path: 'movies', component: MovieComponent},

  {path: 'movieIMDB', component: MovieIMDBComponent},

  {path: 'editMovie/:id', component: EditMovieComponent},

  {path: 'createGenre', component: CreateGenreComponent},

  {path: 'createAuthor', component: CreateAuthorComponent},



  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
