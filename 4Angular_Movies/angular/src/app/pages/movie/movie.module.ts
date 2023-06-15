import { NgModule } from "@angular/core";
import { MovieComponent } from "./movie.component";
import { SharedModule } from "../../../app/shared/shared.module";
import { MovieRoutingModule } from "./movie-routing.module";

@NgModule({
  declarations: [MovieComponent],
  imports: [SharedModule, MovieRoutingModule],
})

export class MovieModule{

  constructor(){}


  openModal( id: any){
    console.log(id);
  }

}
