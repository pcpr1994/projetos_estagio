import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { DetailsComponent } from './details.component'
import { EditMovieComponent } from '../editMovie/editMovie.component'

 const routes: Routes = [
  {
    path: '',
    component: DetailsComponent
  },

  {path: 'editMovie', component: EditMovieComponent}


]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class DetailsRoutingModule {}
