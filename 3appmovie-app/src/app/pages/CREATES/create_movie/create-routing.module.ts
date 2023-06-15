import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { CreateIMDBComponent } from '../create_IMDB/createIMDB.component'
import { CreateComponent } from './create.component'
import { DetailsComponent } from '../../details/details.component'
import { CreateGenreComponent } from '../create_genre/createGenre.component'


const routes: Routes = [
  {
    path: '',
    component: CreateComponent

  },
  {path: 'createGenre', component: CreateGenreComponent},


  {path: 'details', component:DetailsComponent},

]





@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class CreateRoutingModule {}
