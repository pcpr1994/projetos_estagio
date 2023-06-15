import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'

import {LoginExComponent } from './pages/login/loginEx.component'
import {HomeComponent} from './pages/home/home.component'
import { CreateIMDBComponent } from './pages/CREATES/create_IMDB/createIMDB.component'
import { CreateComponent } from './pages/CREATES/create_movie/create.component'
import { DetailsComponent } from './pages/details/details.component'
import { CreateAuthorComponent} from './pages/CREATES/create_author/createAuthor.component'
import { CreateGenreComponent } from './pages/CREATES/create_genre/createGenre.component'
import { EditMovieComponent } from './pages/editMovie/editMovie.component'
import { DeleteComponent } from './pages/delete/delete.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  { path: 'item/:id', component: ItemDetailComponent },

  {path: 'login', component: LoginExComponent},

  { path: 'login', loadChildren: () => import('./pages/login/loginEx.module').then(m => m.LoginExModule)},

  {path: 'home', component: HomeComponent},
  {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},

  {path: 'createIMDB', component: CreateIMDBComponent},

  {path: 'create', component:CreateComponent},
  {path: 'create', loadChildren: () => import('./pages/CREATES/create_movie/create.module').then(m => m.CreateModule)},

  {path: 'details', component:DetailsComponent},

  {path: 'createGenre', component:CreateGenreComponent},

  {path: 'createAuthor', component:CreateAuthorComponent},

  {path: 'home/create/createGenre', component:CreateGenreComponent},

  {path: 'home/create/createAuthor', component:CreateAuthorComponent},

  {path: 'create/createAuthor', component:CreateAuthorComponent},

  {path: 'editMovie', component: EditMovieComponent},

  { path: 'details/:id', loadChildren: () => import('./pages/details/details.module')
        .then(m => m.DetailsModule)},

  {path: 'delete', component: DeleteComponent},

  {path: 'delete', loadChildren: () => import('./pages/delete/delete.module').then(m => m.DeleteModule)},

]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
