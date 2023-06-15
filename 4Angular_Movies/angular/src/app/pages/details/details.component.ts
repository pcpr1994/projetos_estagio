import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author, AuthorService, Genre, GenreService } from 'src/app/core';
import { Movie } from 'src/app/core/models/GetMovie';
import { ServiceMovieService } from 'src/app/core/service/service-movie.service';
import { DomSanitizer } from "@angular/platform-browser"

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  id: string;
  movie = {} as Movie;
  genre: Genre;
  author: Author;

  imagens: string[] = [];


  constructor(
    private router: ActivatedRoute,
    private movieservice: ServiceMovieService,
    private genreService: GenreService,
    private authorService: AuthorService,
    private sanitizer: DomSanitizer
  ){}


  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    //console.log(this.id);

    this.movieservice.getMovieId(this.id).subscribe((res) =>{
      this.movie = res;
      //console.log(this.movie);

      //para ir buscar o genero (descrição)
      this.genreService.getGenreId(this.movie.genreid).subscribe((res) =>{
        this.genre = res;
        this.movie.genreDescription=this.genre.description;

      });

      this.authorService.getAuthorId(this.movie.authorid).subscribe((res) =>{
        this.author = res;
        this.movie.authorName= this.author.name;
      });


      this.imagens.push(this.movie.image1);
      this.imagens.push(this.movie.image2);
      this.imagens.push(this.movie.linkPoster1);
      this.imagens.push(this.movie.linkPoster2);

      /* console.log(this.movie); */
    });
  }


  //para o video na pagina
  videoUrl() {
    let video = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.linkEmbed);
    return video;
  }

}
