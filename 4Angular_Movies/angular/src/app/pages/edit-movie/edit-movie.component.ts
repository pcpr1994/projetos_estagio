import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Author, Genre, Movie, MoviePost } from 'src/app/core/models';
import { AuthorService, GenreService, ServiceMovieService } from 'src/app/core/service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent {

  //variaveis
  id: string;
  movie = {} as Movie;
  moviePost : MoviePost;
  genre = {} as Genre[];
  author = {} as Author[];

  form = new FormGroup({
      title: new FormControl('', Validators.required),
      genreid: new FormControl('',Validators.required),
      authorid: new FormControl('',Validators.required),
      releaseDate: new FormControl('',Validators.required),
      price: new FormControl('',Validators.min(0)),
      rating: new FormControl('', Validators.max(10)),
      runtimeMins: new FormControl('',Validators.required),
      plot: new FormControl('',Validators.required),
      writers: new FormControl('',Validators.required),
      stars: new FormControl('',Validators.required),
      countries: new FormControl('',Validators.required),
      languages: new FormControl('',Validators.required),
      idImdb: new FormControl('',Validators.required),
      awards: new FormControl('',Validators.required),
      linkEmbed: new FormControl('',Validators.required),
      videoDescription: new FormControl('',Validators.required),
      linkPoster1: new FormControl('',Validators.required),
      linkPoster2: new FormControl('',Validators.required),
      image1: new FormControl('',Validators.required),
      image2: new FormControl('',Validators.required),

  });

  constructor(private router: ActivatedRoute,
    private movieservice: ServiceMovieService,
    private genreService: GenreService,
    private authorService: AuthorService,
    private routere : Router,
    ){

  }

  ngOnInit(){
    this.id=this.router.snapshot.paramMap.get('id');

   /*  console.log(this.id); */

    this.movieservice.getMovieId(this.id).subscribe((res) =>{
      this.movie = res;


      //para ir buscar o genero (descrição)
      this.genreService.getAllGenre().subscribe((res) =>{
        this.genre = res;

      });
      //para ir buscar o nome do author
      this.authorService.getAuthorAll().subscribe((res) =>{
        this.author = res;

      });
      /* console.log(this.movie); */
    });

  }

  submitForm( ){
    /* console.log(this.form); */
    this.preencher();
    this.movieservice.updateMovie(this.id,this.moviePost).subscribe((res)=>{
      /* console.log(res); */
    });
    this.routere.navigate(['/movies']);

  }

  preencher() {
    this.moviePost = { ...this.form.value } as unknown as MoviePost;
    /* console.log('////////////////preencher');
    console.log(this.moviePost);
    debugger */
    this.moviePost.runtimeMins = this.moviePost.runtimeMins.toString();

  }


}
