import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [{ path: '', component: MovieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), NgxPaginationModule],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
