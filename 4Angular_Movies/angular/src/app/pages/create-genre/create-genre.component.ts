import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenreService, PostGenre } from 'src/app/core';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.scss']
})
export class CreateGenreComponent {


  genre : PostGenre;

  form = new FormGroup({
    description: new FormControl('', Validators.required),
  })

  constructor(private genreService: GenreService,
    private router: Router){

  }

  submitForm(){
    console.log(this.form)

    this.genre = { ...this.form.value } as unknown as PostGenre;

    console.log(this.genre);
    this.genreService.postGenre(this.genre).subscribe((result) =>{
      /* console.log(result); */
      alert("sucess!");
    });
    this.router.navigate(['/movies']);

  }

}
