import { Component } from '@angular/core'
import { ActivatedRoute, Router } from "@angular/router";
import { AuthorNameModel } from '~/app/core/models/authorName';
import { GenreDesModel } from '~/app/core/models/genreDesc';
import { MovieModel } from '~/app/core/models/movie.model';
import { MovieModelHttp } from '~/app/core/models/moviehttp.model';
import { ApiService } from '~/app/core/services/apiserviceEx.service';
import { MovieService } from '~/app/core/services/movie.service';
import { MovieHttpService } from '~/app/core/services/movieHttp.service';

/* import { registerElement } from "nativescript-angular/element-registry"; */
import { RouterExtensions, registerElement } from '@nativescript/angular';
import { Video } from 'nativescript-videoplayer';
import { EventData, ItemEventData, Utils } from '@nativescript/core';
/* import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
registerElement("VideoPlayer", () => Video);
 */


@Component({
  selector: 'ns-details',
  templateUrl: './details.component.html',
})

export class DetailsComponent {

  public ID_Movie;
  protected images: Array<any> = [];

  movie: MovieModel | undefined = undefined;

  movieHttp: MovieModelHttp | undefined = undefined;

  movieId: MovieModelHttp;
  genre: GenreDesModel;
  author: AuthorNameModel;
 /*  videoUrl;
  trustVideoUrl:SafeUrl;
  private _videoPlayer: Video; */

/*   protected images: Array = []; */

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    /* private movieService : MovieService,
    private movieServicehttp: MovieHttpService, */
    private apiService : ApiService,
    /* private sanitizer: DomSanitizer */ ) {

      /* this.images = [
        { url: this.movieId.image1 },
        { url: this.movieId.image2 },
        ]; */
    }
    /* openURL(URL: string) {
      Utils.openUrl(URL);
    }

    onVideoLoaded(args: EventData) {
      console.log('Video loaded');
      this._videoPlayer = <Video>args.object;
      this.playVideo();
    }
    playVideo() {
      this._videoPlayer.play();
    }
 */

    onFlickTap(args: ItemEventData): void {
      //console.log("//////////////////////////////////");
      this.routerExtensions.navigate(['edit', this.ID_Movie]);
      //console.log(this.movieList[args.index].id);
    }

    ngOnInit(): void {

       let id= this.activatedRoute.snapshot.params.id
       console.log('id-> IMDB',id);
       this.ID_Movie = id;

      if (id) {

        ///fazer uma chamada a api para ir buscar os dados de um filme pelo ID


        console.log(id);
        //this.movieHttp;
        this.apiService.getMovieId(id).subscribe((response:MovieModelHttp) => {
          this.movieId = response
          //this.trustVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.movieId.linkEmbed);

          if (this.movieId.languages == null || this.movieId.plot == null ||
            this.movieId.writers == null || this.movieId.stars == null ||
            this.movieId.countries == null || this.movieId.languages == null ||
            this.movieId.awards == null || this.movieId.linkEmbed == null || this.movieId.image1==null ||
            this.movieId.image2==null ||
            this.movieId.videoDescription == null || this.movieId.runtimeMins==null) {
              this.movieId.languages='--',
              this.movieId.plot ='--',
            this.movieId.writers ='--', this.movieId.stars ='--',
            this.movieId.countries ='--', this.movieId.languages='--',
            this.movieId.awards='--',
            this.movieId.linkEmbed='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7awOjQbJp4TyD4JQriBSoaUxmreAFG1KcSw&usqp=CAU',
            this.movieId.image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7awOjQbJp4TyD4JQriBSoaUxmreAFG1KcSw&usqp=CAU',
            this.movieId.image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7awOjQbJp4TyD4JQriBSoaUxmreAFG1KcSw&usqp=CAU',

            this.movieId.videoDescription ='--',
            this.movieId.runtimeMins = '--'

          }

          //this.videoUrl = this.movieId.linkEmbed;
          //videoId = "VIDEO_ID_HERE";
          //this.videoSrc = this.movieId.linkEmbed.concat('.mp4');

          //console.log(this.movieId);
          this.apiService.getGenreDesc(this.movieId.genreid).subscribe((response:GenreDesModel) =>{
            this.genre = response
            this.movieId.genreDescription=this.genre.description
            //console.log('//////////////////////////////////////////////')
            //console.log(this.movieId.genreDescription)
          }),

          this.apiService.getAuthorName(this.movieId.authorid).subscribe((response:AuthorNameModel) => {
            this.author = response
            this.movieId.authorName = this.author.name

          })

        })

        //this.movieHttp =this.movieServicehttp.getMovieById(id.toString())
      }
    }
}
