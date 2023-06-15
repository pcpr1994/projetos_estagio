import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceMovieService } from 'src/app/core/service';

@Component({
  selector: 'app-movie-imdb',
  templateUrl: './movie-imdb.component.html',
  styleUrls: ['./movie-imdb.component.scss']
})
export class MovieIMDBComponent {

  form = new FormGroup({
    IdIMDB: new FormControl('', Validators.required)

  });

  id: any;

  constructor(
    private movieService : ServiceMovieService,
    private routere : Router,
  ){

  }

  submitForm( ){
    if (this.form.valid) {
      /* console.log('form:', this.form); */
      this.id = this.form.value.IdIMDB;
      /* console.log('id:', this.id); */

      this.movieService.postMovieIMDB(this.id.toString()).subscribe((result) => {
        /* console.log(result); */
        alert('Sucesso');
      });
      this.routere.navigate(['/movies']);

    }
  }

}


