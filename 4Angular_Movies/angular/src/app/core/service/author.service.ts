import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../models/UrlBase';
import { Observable } from 'rxjs';
import { Author } from '../models/GetAuthor';
import { PostAuthor } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private URL = baseUrl;

  private GetAuthorId = baseUrl.concat('/api/app/author/')
  private GetAllAuthor = baseUrl.concat('/api/app/author/author')
  private PostAuthorURL = baseUrl.concat('/api/app/author')


  constructor(private http: HttpClient) { }

  getAuthorId(id: string) : Observable<Author> {
    const url = this.GetAuthorId.concat(id);

    return this.http.get<Author>(url);
  }

  getAuthorAll() : Observable<Author[]>{
    const Url = this.GetAllAuthor;

    return this.http.get<Author[]>(Url);

  }
  postAuthor(author: PostAuthor) {
    return this.http.post(this.PostAuthorURL, author);
  }






}
