import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular';
import { ItemEventData } from '@nativescript/core';
import { MovieService} from "../../core/services/movie.service"
import {MovieHttpService} from "../../core/services/movieHttp.service"
import {TokenService} from "../../core/services/tokenService.service"
import { ApiService } from '~/app/core/services/apiserviceEx.service';
import { MovieModelHttp } from '~/app/core/models/moviehttp.model';

@Component({
  moduleId: module.id,
  selector: 'ns-home',
  templateUrl: 'home.component.html'

})

export class HomeComponent{

  //movieList : Moviehttp[];


  movies = this.movieService.getMovies()

  //movies estrutura post
  moviesHttp = this.movieServicehttp.getMovies()

  movieList : MovieModelHttp[];

  constructor(
    //private movieHttpService: MovieHttpService,
    private movieService: MovieService,
    private movieServicehttp: MovieHttpService,
    private routerExtensions: RouterExtensions,
    private tokenservice: TokenService,
    private apiService : ApiService
  ){
     //console.log('home');
    //console.log(localStorage.getItem("access_token"));
   /* console.log(this.tokenservice.getToken);
    console.log(this.tokenservice.saveToken); */


      this.apiService.getAcount().subscribe(res => {

        console.log('///////////////////////////////////////////////////////////LOGIN')

        //console.log(res);
        console.log('fim acount')
      })
     /*  console.log(this.apiService.getAcount());
      console.log('///////////////////////////////////////////////////////////GGGGG')*/
      //console.log('fim acount')

    this.apiService.getMovie().subscribe(movieObtained => {
      //console.log(movieObtained);
      this.movieList = movieObtained;
      console.log("-----------------------------------------------------------------------------MOVIE")
       //console.log(this.movieList)
    })
  }



  onFlickTap(args: ItemEventData): void {
    //console.log("//////////////////////////////////");
    this.routerExtensions.navigate(['details', this.movieList[args.index].id]);
    //console.log(this.movieList[args.index].id);


  }


}
