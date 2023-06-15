import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Author, Genre, Movie, MoviePost } from 'src/app/core/models';
import { AuthorService, GenreService, ServiceMovieService } from 'src/app/core/service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit  {

  movie= {} as MoviePost;
  genreGet : Genre[];
  authorGet: Author[];

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    genreid: new FormControl('', Validators.required),
    authorid: new FormControl('', Validators.required),
    releaseDate: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.max(10)),
    price: new FormControl('',Validators.min(0)),
    plot: new FormControl('', Validators.required),
  });

  constructor(
    private router: ActivatedRoute,
    private routere : Router,
    private movieservice: ServiceMovieService,
    private genreService: GenreService,
    private authorService: AuthorService,
  ) { }
  ngOnInit() {

    this.genreService.getAllGenre().subscribe((genre) => {
      this.genreGet = genre;
      /* console.log(this.genreGet); */
    })

    this.authorService.getAuthorAll().subscribe((author) => {
      this.authorGet = author;
      /* console.log(this.authorGet); */
    })

  }

  submitForm( ){

    if (this.form.valid) {
        /* console.log('form:', this.form); */

    this.preencher();

        /* console.log("antes do post")
        console.log(this.movie); */
        this.movieservice.postMovieCreate(this.movie).subscribe((result) => {
         /*  console.log(result); */

        });
        this.routere.navigate(['/movies']);

    }
    else{
      alert('Missing fields!');
    }

  }
  preencher(){

    this.movie.runtimeMins = "-";
    this.movie.writers= "-";
    this.movie.stars= "-";
    this.movie.countries= "-";
    this.movie.languages= "-";
    this.movie.idImdb= "-";
    this.movie.awards= "-";
    this.movie.linkEmbed= "-";
    this.movie.videoDescription= "-";
    this.movie.linkPoster1= "https://illustoon.com/photo/5005.png";
    this.movie.linkPoster2= "https://illustoon.com/photo/5005.png";
    this.movie.image1= "https://illustoon.com/photo/5005.png";
    this.movie.image2= "https://illustoon.com/photo/5005.png";

    this.movie = {...this.movie, ...this.form.value} as MoviePost;

    /* console.log("///////////////////////////////////");
    console.log(this.movie); */

  }

}
