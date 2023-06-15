import { Injectable } from '@angular/core';
import { baseUrl } from '../models/UrlBase';
import { Observable } from 'rxjs';
import { Movie } from '../models/GetMovie';
import { HttpClient } from '@angular/common/http';
import { MoviePost, UpdateMovie } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ServiceMovieService {

  private URL = baseUrl;

  private AllMovie = baseUrl.concat("/api/app/movie/movies");
  private GetMovieId = baseUrl.concat("/api/app/movie/");
  private MoviePost = baseUrl.concat("/api/app/movie");
  private MoviePostIMDB = baseUrl.concat("/api/app/movie-api-imdb/import-movie-to-iMDB?idImdb=")
  private DeleteMovie = baseUrl.concat("/api/app/movie/");
  private UpdateMovie = baseUrl.concat("/api/app/movie/");



  constructor(private http: HttpClient) { }


    //get all movies
    getMovie() : Observable<Movie[]> {
      const url=this.AllMovie;

      return this.http.get<Movie[]>(url);
    }


    getMovieId(id:string) : Observable<Movie> {
      const url = this.GetMovieId.concat(id);

      return this.http.get<Movie>(url)
    }

    postMovieCreate(movie:MoviePost)  {
      console.log('dentro do post');
      console.log(movie);

      return this.http.post(this.MoviePost,movie);

    }

    postMovieIMDB(id:string) {
      const url = this.MoviePostIMDB.concat(id);

      return this.http.post(url,{})
    }

    deleteMovieID(id:string) {
      const url = this.DeleteMovie.concat(id.toString());

      return this.http.delete(url)
    }

    updateMovie(id:string, movie:MoviePost) : Observable<UpdateMovie> {
      const url = this.UpdateMovie.concat(id.toString());

      return this.http.put<UpdateMovie>(url, movie)
    }

}
