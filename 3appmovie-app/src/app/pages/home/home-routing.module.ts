import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { HomeComponent } from './home.component'
import { CreateIMDBComponent } from '../CREATES/create_IMDB/createIMDB.component'
import { CreateComponent } from '../CREATES/create_movie/create.component'
import { DetailsComponent } from '../details/details.component'
import { CreateGenreComponent } from '../CREATES/create_genre/createGenre.component'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {path: 'createIMDB', component: CreateIMDBComponent},

  {path: 'create', component:CreateComponent},

  {path: 'details', component:DetailsComponent},
  {path: 'createGenre', component: CreateGenreComponent},

]





@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule {}
