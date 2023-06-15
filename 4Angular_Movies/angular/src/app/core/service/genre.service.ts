import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostGenre, baseUrl } from '../models';
import {Genre } from '../models/GetGenre'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private URL = baseUrl;
  private GetGenreId = baseUrl.concat("/api/app/genre/")
  private GetAllGenre = baseUrl.concat("/api/app/genre/genre")
  private PostGenreURL = baseUrl.concat("/api/app/genre")

  constructor(private http: HttpClient) { }


  getGenreId(id:string) : Observable<Genre> {
    const url = this.GetGenreId.concat(id);

    return this.http.get<Genre>(url);
  }

  getAllGenre() : Observable<Genre[]> {
    const url = this.GetAllGenre;

    return this.http.get<Genre[]>(url);
  }

  postGenre(genre: PostGenre) {
    return this.http.post(this.PostGenreURL, genre);
  }


}
