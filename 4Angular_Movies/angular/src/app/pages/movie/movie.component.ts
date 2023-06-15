import { Component } from '@angular/core';
import {ServiceMovieService} from '../../core/service/service-movie.service'
import { Movie } from 'src/app/core/models/GetMovie';
import { AlertService } from 'src/app/core/service';

@Component({
  selector: 'app-home',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],

})
export class MovieComponent {

  MovieList : Movie[];

  constructor(
    private movieservice: ServiceMovieService,
    private alert: AlertService) { }

    ngOnInit() {
      this.movieservice.getMovie().subscribe((movie) => {
        this.MovieList = movie;
        /* console.log(this.MovieList); */
      })

    }

    async openModal(Id:any) {
      /* console.log(Id); */
        const result = this.alert.confirm('Are you sure you want to delete the film?');
        /* console.log(result); */
        if (await result == true) {
          this.movieservice.deleteMovieID(Id.toString()).subscribe((result) => {
            /* console.log(result); */
            this.ngOnInit();
          })

        } else {
          // Código a ser executado se o botão "Cancelar" for clicado
        }
    }


}
