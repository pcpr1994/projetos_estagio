import { Injectable } from '@angular/core'

import { HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import {returnedLogin} from "../models/returnLogin";
import {baseURLNG} from "../models/URLbaseNG"
import { MovieModelHttp } from '../models/moviehttp.model';
import {Login2} from '../models/returnLogin2'
import { GenreDesModel } from '../models/genreDesc'
import {AuthorNameModel} from '../models/authorName'
import {AuthorRes} from '../models/authorRes'
import {MovieResCreate} from '../models/MovieResCreate'
import { CustomStorageService } from './CustomStorageService.service';
import { TokenService } from './tokenService.service';
import { GenreRes } from '../models/genreRes';


@Injectable({
  providedIn: 'root',
})

export class ApiService {

  private baseurl= baseURLNG.concat("/connect/token");
  private clientId = "MvcMovie_App";
  private getmovie = "/api/app/movie/movies"
  private getmovieID = '/api/app/movie-api-imdb/'
  private acountLogin = '/api/account/login'
  private GenreDes = '/api/app/genre/'
  private AuthorName = '/api/app/author/'
  private createMovieImdb = '/api/app/movie-api-imdb/import-movie-to-iMDB'

  private EMAIL
  private PASS

  public tokenObtido : string

  constructor(private http: HttpClient,  private localStorageService: CustomStorageService,
    private tokenservice: TokenService)
  {
    //console.log('/////////////////////////',this.getAcount);


    //this.localStorageService.setItem("id_token")
    //console.log(localStorage.getItem("access_token"));
      //console.log(this.tokenservice.getToken);


  }


  /////////////////////////////////////////////////////////////////////////////////////////////////

  //create Header /connect/token
  private createRequestHeader() {
    // set headers here e.g.
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length':'' ,
     });
     /*estava dentro do HttpHeaders
     'Host': '',
       'Host': 'a33b-185-37-210-78.ngrok-free.app',
        "AuthKey": "my-key",
        "AuthToken": "my-token",
         "Content-Type":"text/plain",
        "Content-Length":"16",
        "Cache-Control":"no-cache", */


     /* console.log("dentro do headers");
     console.log(headers); */

    return headers;
}


  login(email: string, password: string): Observable<returnedLogin> {

    this.EMAIL = email;
    this.PASS = password;

    const body = new HttpParams()
    .set('username', email)
    .set('password', password)
    .set('client_id', this.clientId)
    .set('grant_type', "password")
    .set('scope', "openid offline_access");
    //console.log("postData");
   // console.log(body);
    //console.log("AQQUIIIIIIIIIIIIIIIIIIIIII headers");


    let headers = this.createRequestHeader();
   // console.log(headers);

    return this.http.post<returnedLogin>(this.baseurl, body.toString(), { headers });
  }

  public tokenBearer: string;

 /*  postLogin(token:string){
    this.tokenObtido = localStorage.getItem("access_token");
    const url=baseURLNG.concat(this.acountLogin)

    this.tokenBearer= 'Bearer '.concat(token);


   //  const body = new HttpParams()
    //.set("userNameOrEmailAddress", this.EMAIL)
   // .set("password", this.PASS)
    //.set("rememberMe", true)
    // .set("access_token", localStorage.getItem("access_token"))
   // .set("token_type",localStorage.getItem("token_type"))
   // .set("expires_in",localStorage.getItem("expires_in"))
   // .set("id_token",localStorage.getItem("id_token"))
   // .set("refresh_token",localStorage.getItem("refresh_token"))

   const body = JSON.stringify({
    "userNameOrEmailAddress": this.EMAIL,
    "password": this.PASS,
    "rememberMe": true,
   })

   //const postData = {

   // userNameOrEmailAddress: this.EMAIL,
  //  password: this.PASS,
  //  rememberMe: true
 // };
 //

    //console.log('s',this.tokenObtido);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      //'content-Type': 'x-access-token',
      'Content-Length':'' ,
      'Authorization': this.tokenBearer,

      //'Accept':',
      //'Accept-Encoding':'gzip, deflate, br',
      //'Connection':'keep-alive'
      //'userNameOrEmailAddress':this.EMAIL,
      // 'password': this.PASS,
      // 'rememberMe': 'true',
      //"Authorization": localStorage.getItem("access_token"),


     });
     //console.log('/////////////////////////////////////////////////////////BODY')
     //console.log(body)
     console.log('/////////////////////////////////////////////////////////') */
     //console.log("USER:////////",localStorage.getItem("username"));

   // return this.http.post(url, body, {headers})

  // } */


    getAcount(){
      const x ="?userNameOrEmailAddress=".concat(this.EMAIL).concat('&password=').concat(this.PASS).concat('&rememberMe=true')
    const url= baseURLNG.concat('/Account/Login');
   //console.log('dentro do acount ////////////////////////////////////////////////////')

    const postData = {

      userNameOrEmailAddress: this.EMAIL,
      password: this.PASS,
      rememberMe: true};

    const body = new HttpParams()
    .set('username', this.EMAIL)
    .set('password', this.PASS)
    //.set('client_id', this.clientId)
    .set('rememberMe', true)

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Content-Length':'' ,
      //'Cookie':'.AspNetCore.Antiforgery.oeVmOJOPBWo=CfDJ8GzTajADOHpEuohzvesk0DKk9zBvfjkOIANWtLqw7pM1Q5TWb6tTC7omCzthh9XdBsLR-3eUu3Y4E2krWTkAQfbsfsTHHaYu02BWxAuqlruwQLhuqgwm2ROGxEyYQhZusek51A6tTN-cZ0FBX30TqZw; .AspNetCore.Identity.Application=CfDJ8GzTajADOHpEuohzvesk0DLJntL86h92h0zPdngNOTleYbtjRp6xXMxTSIyD0eBio3alobEiUk17gIdJORYpdk4Csq3hqj7tC6W2BkHvHD0-Qv_cENgS9siutbi-jaqVgjg8HNMXBD19MgVyvcsfFSLNkeF3oArAbmBne09-hok4pwlc4akSLCv13aMuIOwpMvXYwIWSGD8IZOclhnBeBYXVW8FsSqELwBcNXNDr1sbqbQgMJVYUi5QMGuEmcdSD7_N6_Z7bb_t2hzksyE4xrt_2F6zCxs5Fnb9_rBEWIsx7-ReFWtgFOL7ZGhI5YOlRTKyYDdKU8-hZEyeXxQT3h7u3LNGEHJbrWt669hdIGa6cZwq6t0YRSRBNmm3jeMKGL7R0s1zuLYxx2OzXABqodDpDSa0VbrXQVSSYiL4nygXmkzLP4i3phZz4y6glE5IXUHggBTkxTOFEl2CBooD766Q1XjwtN329lN8y13CH5MujK2Hv6xeSBKo1RHLKvNm8mBby3_OMxkg46WkVyGjP4oLgckWUZ_s0Qq5efUy9bXapT2Fmz3AUay9OzOY__-NJrkpXN9cnQtQ_7ZPlqsDY9q_7DNSuaGSaGppmQ0tPKme5xdjQFMd8o4I2FZw1GWD-3hIidChebtEmDz71vj2mUq2PwWajgfSqvc-VYqBrgodHWsIhbLQb8DPaE61dJP3f80jEdxmuzpHjBpnqCT4te1Kx9t4JSKPqSB0DkOO_3IJ8tMkGAYZbYIAE14IxYncSAs4FCjJ93DasKlmip0hZs-jeXXMedl08SV_idS2U9Q1d',
      'Cache-Control':'no-cache',
      //'Host':''
     });
     /* console.log(postData);
     console.log(headers); */

    return this.http.get(url)
   }

  //get all movies for home
  getMovie() : Observable<MovieModelHttp[]> {
    const url=baseURLNG.concat(this.getmovie);

    let headers = new HttpHeaders({
      'content-Type': 'x-access-token',
      'Connection':'keep-alive',
      'Accept-Encoding':'gzip, deflate, br',
      'Accept':'Accept',
      'Cache-Control':'no-cache',
      'Cookie':'.AspNetCore.Antiforgery.-NmeqT1udVE=CfDJ8GzTajADOHpEuohzvesk0DINKSJD2eJfkbl19J87oKdCOpoPSxRRact9zJLeuYirlwdxRHOdCoBtDGp6V8IKXszFNhBBIS8xOj-ABLbIuWq-kSRWxje79n-y8kRbKO2QnvOCkzqze8dnujDDPtS_cvU; .AspNetCore.Identity.Application=CfDJ8GzTajADOHpEuohzvesk0DL4lXWAPtaW2qMqon1KAta5UG-OIhpQS2wCCbiJvNQfL1SBiD5PVJ0dtrm0oZhBoAxdxeuj6lKz7T7HhSCC_XphFBeP0ItR5Zsy6zXFQylT3XWpTyIE8w2_FnZsGf8NrzKIHQN0AbRzoVl_J4HXXaHfhDIF0n_1d-D6syHYcBms4nOShi1MiMCRLwZKOHkZWdCGIAtZKnG1cnsD2aE_l3H2D1f9hVeBs-etHKZXVebLYHUdlmiyjFjk5EAA8smOiqxkfET84JvIHv2j7XqwLrG6HALgvKq5C3HkmkzEQB2BuKvZHeyWBRJy9pQnH1BwueTzbAEvYAhgKombLeU_Z3UjeoTf9qFfcFRAks7hN1Dlz4pVABDDwcnOt6fUutgYwZoGdZNzxndTqYL4NNVXKTZPoK5vaFz2yBCoXgSRE7RRPeAlGzGWK38KCRSiVQ3oCkemMhF2kzFBe3ZMr-w7bviNLjEN73PUHRTdTFrvqAomVJSsjJoFUyMaOUVEpHUX4bLYSIYW7OFjJ79RVO55NWqF-AatK1FgjFUY5-cL0yQz2m-4lKIk44Xnvy0DKL2y9u8H5EExP5GVtGrHXts6f_0YQc8jgQbhiZ6fzJYIytcpWnn72bB1_lQzUMc65sk-uMqtdFp51Rx_KFkT5l2xYu8n2F7mVVrbtlpAzT43X_lR2CbV_-jZKJGtQRUGc1wtBCnzO4f--zxhTYBZr-QtVfAEuEbC6l8vvlRl5KEnvSRzKecWR5ezEFs0AZ2u3LCK5nw',


      //'Content-Length':'' ,
      // 'username': this.EMAIL,
      // 'password': this.PASS,
    //.set('client_id', this.clientId)
       //'rememberMe': 'true'
      //'Authorization': localStorage.getItem("access_token")
     });

     /* console.log('/////////////////////////////////////////authorization')
     //console.log(localStorage.getItem("access_token"))
     console.log('//////////////////////////////////////////////////////////scscscxcxc//////////////') */

   /* console.log(this.tokenObtido); */

    return this.http.get<MovieModelHttp[]>(url, {headers:headers});
  }

  getMovieId(id:string) : Observable<MovieModelHttp>{
    const url= baseURLNG.concat(this.getmovieID).concat(id);
    console.log("////////////////////////", url);

    let headers = new HttpHeaders({
      'content-Type': 'x-access-token',
      'Connection':'keep-alive',
      'Accept-Encoding':'gzip, deflate, br',
      'Accept':'Accept',
      'Cache-Control':'no-cache',
      'Cookie':'.AspNetCore.Antiforgery.-NmeqT1udVE=CfDJ8GzTajADOHpEuohzvesk0DINKSJD2eJfkbl19J87oKdCOpoPSxRRact9zJLeuYirlwdxRHOdCoBtDGp6V8IKXszFNhBBIS8xOj-ABLbIuWq-kSRWxje79n-y8kRbKO2QnvOCkzqze8dnujDDPtS_cvU; .AspNetCore.Identity.Application=CfDJ8GzTajADOHpEuohzvesk0DL4lXWAPtaW2qMqon1KAta5UG-OIhpQS2wCCbiJvNQfL1SBiD5PVJ0dtrm0oZhBoAxdxeuj6lKz7T7HhSCC_XphFBeP0ItR5Zsy6zXFQylT3XWpTyIE8w2_FnZsGf8NrzKIHQN0AbRzoVl_J4HXXaHfhDIF0n_1d-D6syHYcBms4nOShi1MiMCRLwZKOHkZWdCGIAtZKnG1cnsD2aE_l3H2D1f9hVeBs-etHKZXVebLYHUdlmiyjFjk5EAA8smOiqxkfET84JvIHv2j7XqwLrG6HALgvKq5C3HkmkzEQB2BuKvZHeyWBRJy9pQnH1BwueTzbAEvYAhgKombLeU_Z3UjeoTf9qFfcFRAks7hN1Dlz4pVABDDwcnOt6fUutgYwZoGdZNzxndTqYL4NNVXKTZPoK5vaFz2yBCoXgSRE7RRPeAlGzGWK38KCRSiVQ3oCkemMhF2kzFBe3ZMr-w7bviNLjEN73PUHRTdTFrvqAomVJSsjJoFUyMaOUVEpHUX4bLYSIYW7OFjJ79RVO55NWqF-AatK1FgjFUY5-cL0yQz2m-4lKIk44Xnvy0DKL2y9u8H5EExP5GVtGrHXts6f_0YQc8jgQbhiZ6fzJYIytcpWnn72bB1_lQzUMc65sk-uMqtdFp51Rx_KFkT5l2xYu8n2F7mVVrbtlpAzT43X_lR2CbV_-jZKJGtQRUGc1wtBCnzO4f--zxhTYBZr-QtVfAEuEbC6l8vvlRl5KEnvSRzKecWR5ezEFs0AZ2u3LCK5nw',

     });


    return this.http.get<MovieModelHttp>(url,{headers:headers});

  }




  //MOVIE
  postCreateMovieImdb(id:string){
    const url = baseURLNG.concat(this.createMovieImdb);
    const body = new HttpParams()
    .set('idImdb', id)
  //  https://localhost:44380/api/app/movie-api-imdb/tt12889404/import-id-jsom
    /* let headers = new HttpHeaders({
      'Cookie':'.AspNetCore.Antiforgery.oeVmOJOPBWo=CfDJ8GzTajADOHpEuohzvesk0DJ4dZlw5KPpXKz3LaDmOzWHN4Qlpa-5tIx4GG2rCToXDQ95vnD4uoXg9IbTIV4femHGaGlmIKyMxeMap5X9kJO-HsmxQVnMkAxqS8wSmOgoWZA5qEKmKV1F5D2Z6IGLjG4; .AspNetCore.Identity.Application=CfDJ8GzTajADOHpEuohzvesk0DKTBxKddg78V559m8r9l0kGsxOy-hlv6vspejWBpR3IZL6md7pZ5T0jLHFROt95C1lFTzls08pj91xrgMvbPC4JsOgcCX-lqMOFnFoQO5kAzXWXDIQJYo8aC13F_5it3r-a98rFMn9-CAYKM6Z_OCkVIyaWvQgMa6G9MielWkUmDREJjN0bNVEjfqkrtsMqHf333hoeizGBiEvuFWUown4U5zsU9IbVBAozYPuAgEoYEzG81tYE9OwAr1GHbjawkib7IHNwoNYyWsy4sWcU4fJXQ105onAcDzGIH3azNgtS-83MwvT4zkfXU60PImN7_nbvw7_TfNrNbSqUC8FT0aIDqD83B4BAeY8Q-4daWCy2iPjj42x7hQFHmE3BSNc2jtnrOBbcq9DRv7yYwTb6dV3rhk3Kz4rDSp3G9flw5xkqJ22tqteApqTZa68JFPOWZ-jhIid5NZdCCIs1LW6znGPpaBIDiAv6F5q9gjnMVyqQFfeLnFHhp7QnXYHiO7m27nOhLJGAH8IztZpQ8uznscYLGALflF9Ufuzva0QbliEY3JfGP-cbOzanFMMy8qoYTvKfdl2Bo3w2vPqrQe5gi54P6FiBpr79Bsyg95QfkV5xP7saoN2W9jZsXEa8GFu2lL7wXLqZ5ZQ8UpRMX_nAsMksExt6PeA9EWPDUJs0UPNis8LQoo1ouxhlQkOsXkYJp-sepx7UIruSvDMrpMMr7HrG1F5y0sNSZK27fP6-FOaWRNYhJNkyeGH8rWWP6cwCWRmN8rjqrH6qYJ7Th2G3n98b',
      'Content-Type': 'multipart/form-data; boundary=',
      'Content-Length':'' ,
      'Cache-Control':'no-cache',
      'Accept': '',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection':'keep-alive'
      //'Host':''
     }); */

    return this.http.post(url, body);
  }


  //create movie
  postMovieCreate(Idauthor: string, Idgenre: string, title: string, dataformate : string,
     price: number, rating: number, plot: string) : Observable<MovieResCreate> {
      const url = baseURLNG.concat('/api/app/movie');

      const data = {
        title: title,
        genreid: Idgenre,
        authorId: Idauthor,
        releaseDate: dataformate,
        price: price,
        rating: rating,
        runtimeMins: '0',
        plot: plot,
        writers: '',
        stars: '',
        countries: '',
        languages: '',
        idImdb: '',
        awards: '',
        linkEmbed: '',
        videoDescription:'',
        linkPoster1: '',
        linkPoster2: '',
        image1: '',
        image2:''
      }
      //console.log(data);

      const body = new HttpParams()
    .set('title', title)
    .set('genreid', Idgenre)
    .set('authorId', Idauthor)
    .set('releaseDate', dataformate)
    .set('price', price)
    .set('rating', rating)
    .set('runtimeMins', '0')
    .set('plot', plot)
    .set('writers', '')
    .set('stars', '')
    .set('countries', '')
    .set('languages', '')
    .set('idImdb', '')
    .set('awards', '')
    .set('linkEmbed', '')
    .set('videoDescription','')
    .set('linkPoster1', '')
    .set('linkPoster2', '')
    .set('image1', '')
    .set('image2','')

    /* console.log('///////////////////////////////////////////token');
    console.log(this.tokenObtido); */

      let headers = new HttpHeaders({
        'content-Type': 'application/json',
        'Content-Length':'',
        //'Connection':'keep-alive',
        //'Accept-Encoding':'gzip, deflate, br',
        'accept':'*/*',
        //'Cache-Control':'no-cache',
        'Authorization':this.tokenObtido,
        //'RequestVerificationToken':'.AspNetCore.Antiforgery.oeVmOJOPBWo=CfDJ8GzTajADOHpEuohzvesk0DJ4dZlw5KPpXKz3LaDmOzWHN4Qlpa-5tIx4GG2rCToXDQ95vnD4uoXg9IbTIV4femHGaGlmIKyMxeMap5X9kJO-HsmxQVnMkAxqS8wSmOgoWZA5qEKmKV1F5D2Z6IGLjG4; .AspNetCore.Identity.Application=CfDJ8GzTajADOHpEuohzvesk0DKTBxKddg78V559m8r9l0kGsxOy-hlv6vspejWBpR3IZL6md7pZ5T0jLHFROt95C1lFTzls08pj91xrgMvbPC4JsOgcCX-lqMOFnFoQO5kAzXWXDIQJYo8aC13F_5it3r-a98rFMn9-CAYKM6Z_OCkVIyaWvQgMa6G9MielWkUmDREJjN0bNVEjfqkrtsMqHf333hoeizGBiEvuFWUown4U5zsU9IbVBAozYPuAgEoYEzG81tYE9OwAr1GHbjawkib7IHNwoNYyWsy4sWcU4fJXQ105onAcDzGIH3azNgtS-83MwvT4zkfXU60PImN7_nbvw7_TfNrNbSqUC8FT0aIDqD83B4BAeY8Q-4daWCy2iPjj42x7hQFHmE3BSNc2jtnrOBbcq9DRv7yYwTb6dV3rhk3Kz4rDSp3G9flw5xkqJ22tqteApqTZa68JFPOWZ-jhIid5NZdCCIs1LW6znGPpaBIDiAv6F5q9gjnMVyqQFfeLnFHhp7QnXYHiO7m27nOhLJGAH8IztZpQ8uznscYLGALflF9Ufuzva0QbliEY3JfGP-cbOzanFMMy8qoYTvKfdl2Bo3w2vPqrQe5gi54P6FiBpr79Bsyg95QfkV5xP7saoN2W9jZsXEa8GFu2lL7wXLqZ5ZQ8UpRMX_nAsMksExt6PeA9EWPDUJs0UPNis8LQoo1ouxhlQkOsXkYJp-sepx7UIruSvDMrpMMr7HrG1F5y0sNSZK27fP6-FOaWRNYhJNkyeGH8rWWP6cwCWRmN8rjqrH6qYJ7Th2G3n98b',
        //'Cookie':'.AspNetCore.Antiforgery.oeVmOJOPBWo=CfDJ8GzTajADOHpEuohzvesk0DJ4dZlw5KPpXKz3LaDmOzWHN4Qlpa-5tIx4GG2rCToXDQ95vnD4uoXg9IbTIV4femHGaGlmIKyMxeMap5X9kJO-HsmxQVnMkAxqS8wSmOgoWZA5qEKmKV1F5D2Z6IGLjG4; .AspNetCore.Identity.Application=CfDJ8GzTajADOHpEuohzvesk0DKTBxKddg78V559m8r9l0kGsxOy-hlv6vspejWBpR3IZL6md7pZ5T0jLHFROt95C1lFTzls08pj91xrgMvbPC4JsOgcCX-lqMOFnFoQO5kAzXWXDIQJYo8aC13F_5it3r-a98rFMn9-CAYKM6Z_OCkVIyaWvQgMa6G9MielWkUmDREJjN0bNVEjfqkrtsMqHf333hoeizGBiEvuFWUown4U5zsU9IbVBAozYPuAgEoYEzG81tYE9OwAr1GHbjawkib7IHNwoNYyWsy4sWcU4fJXQ105onAcDzGIH3azNgtS-83MwvT4zkfXU60PImN7_nbvw7_TfNrNbSqUC8FT0aIDqD83B4BAeY8Q-4daWCy2iPjj42x7hQFHmE3BSNc2jtnrOBbcq9DRv7yYwTb6dV3rhk3Kz4rDSp3G9flw5xkqJ22tqteApqTZa68JFPOWZ-jhIid5NZdCCIs1LW6znGPpaBIDiAv6F5q9gjnMVyqQFfeLnFHhp7QnXYHiO7m27nOhLJGAH8IztZpQ8uznscYLGALflF9Ufuzva0QbliEY3JfGP-cbOzanFMMy8qoYTvKfdl2Bo3w2vPqrQe5gi54P6FiBpr79Bsyg95QfkV5xP7saoN2W9jZsXEa8GFu2lL7wXLqZ5ZQ8UpRMX_nAsMksExt6PeA9EWPDUJs0UPNis8LQoo1ouxhlQkOsXkYJp-sepx7UIruSvDMrpMMr7HrG1F5y0sNSZK27fP6-FOaWRNYhJNkyeGH8rWWP6cwCWRmN8rjqrH6qYJ7Th2G3n98b',
      })

     return this.http.post<MovieResCreate>(url, body.toString(),{headers: headers})

     }


//////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

  //AUTHOR
 //get para ir buscar todos os author
  getAuthorAll() : Observable<AuthorRes>{
    const url = baseURLNG.concat('/api/app/author');
  let headers = new HttpHeaders({
      'content-Type': 'x-access-token',
      'Connection':'keep-alive',
      'Accept-Encoding':'gzip, deflate, br',
      'Accept':'Accept',
      'Cache-Control':'no-cache',
      'Cookie':'.AspNetCore.Antiforgery.-NmeqT1udVE=CfDJ8GzTajADOHpEuohzvesk0DINKSJD2eJfkbl19J87oKdCOpoPSxRRact9zJLeuYirlwdxRHOdCoBtDGp6V8IKXszFNhBBIS8xOj-ABLbIuWq-kSRWxje79n-y8kRbKO2QnvOCkzqze8dnujDDPtS_cvU; .AspNetCore.Identity.Application=CfDJ8GzTajADOHpEuohzvesk0DL4lXWAPtaW2qMqon1KAta5UG-OIhpQS2wCCbiJvNQfL1SBiD5PVJ0dtrm0oZhBoAxdxeuj6lKz7T7HhSCC_XphFBeP0ItR5Zsy6zXFQylT3XWpTyIE8w2_FnZsGf8NrzKIHQN0AbRzoVl_J4HXXaHfhDIF0n_1d-D6syHYcBms4nOShi1MiMCRLwZKOHkZWdCGIAtZKnG1cnsD2aE_l3H2D1f9hVeBs-etHKZXVebLYHUdlmiyjFjk5EAA8smOiqxkfET84JvIHv2j7XqwLrG6HALgvKq5C3HkmkzEQB2BuKvZHeyWBRJy9pQnH1BwueTzbAEvYAhgKombLeU_Z3UjeoTf9qFfcFRAks7hN1Dlz4pVABDDwcnOt6fUutgYwZoGdZNzxndTqYL4NNVXKTZPoK5vaFz2yBCoXgSRE7RRPeAlGzGWK38KCRSiVQ3oCkemMhF2kzFBe3ZMr-w7bviNLjEN73PUHRTdTFrvqAomVJSsjJoFUyMaOUVEpHUX4bLYSIYW7OFjJ79RVO55NWqF-AatK1FgjFUY5-cL0yQz2m-4lKIk44Xnvy0DKL2y9u8H5EExP5GVtGrHXts6f_0YQc8jgQbhiZ6fzJYIytcpWnn72bB1_lQzUMc65sk-uMqtdFp51Rx_KFkT5l2xYu8n2F7mVVrbtlpAzT43X_lR2CbV_-jZKJGtQRUGc1wtBCnzO4f--zxhTYBZr-QtVfAEuEbC6l8vvlRl5KEnvSRzKecWR5ezEFs0AZ2u3LCK5nw',

     });

    return this.http.get<AuthorRes>(url, {headers:headers} );

  }

    //ir buscar um outro atraves do id
    getAuthorName(id:string) : Observable<AuthorNameModel>{
      const url = baseURLNG.concat(this.AuthorName).concat(id);

      let headers = new HttpHeaders({
        'content-Type': 'x-access-token',
        'Connection':'keep-alive',
        'Accept-Encoding':'gzip, deflate, br',
        'Accept':'Accept',
        'Cache-Control':'no-cache',
        'Cookie':'.AspNetCore.Antiforgery.-NmeqT1udVE=CfDJ8GzTajADOHpEuohzvesk0DINKSJD2eJfkbl19J87oKdCOpoPSxRRact9zJLeuYirlwdxRHOdCoBtDGp6V8IKXszFNhBBIS8xOj-ABLbIuWq-kSRWxje79n-y8kRbKO2QnvOCkzqze8dnujDDPtS_cvU; .AspNetCore.Identity.Application=CfDJ8GzTajADOHpEuohzvesk0DL4lXWAPtaW2qMqon1KAta5UG-OIhpQS2wCCbiJvNQfL1SBiD5PVJ0dtrm0oZhBoAxdxeuj6lKz7T7HhSCC_XphFBeP0ItR5Zsy6zXFQylT3XWpTyIE8w2_FnZsGf8NrzKIHQN0AbRzoVl_J4HXXaHfhDIF0n_1d-D6syHYcBms4nOShi1MiMCRLwZKOHkZWdCGIAtZKnG1cnsD2aE_l3H2D1f9hVeBs-etHKZXVebLYHUdlmiyjFjk5EAA8smOiqxkfET84JvIHv2j7XqwLrG6HALgvKq5C3HkmkzEQB2BuKvZHeyWBRJy9pQnH1BwueTzbAEvYAhgKombLeU_Z3UjeoTf9qFfcFRAks7hN1Dlz4pVABDDwcnOt6fUutgYwZoGdZNzxndTqYL4NNVXKTZPoK5vaFz2yBCoXgSRE7RRPeAlGzGWK38KCRSiVQ3oCkemMhF2kzFBe3ZMr-w7bviNLjEN73PUHRTdTFrvqAomVJSsjJoFUyMaOUVEpHUX4bLYSIYW7OFjJ79RVO55NWqF-AatK1FgjFUY5-cL0yQz2m-4lKIk44Xnvy0DKL2y9u8H5EExP5GVtGrHXts6f_0YQc8jgQbhiZ6fzJYIytcpWnn72bB1_lQzUMc65sk-uMqtdFp51Rx_KFkT5l2xYu8n2F7mVVrbtlpAzT43X_lR2CbV_-jZKJGtQRUGc1wtBCnzO4f--zxhTYBZr-QtVfAEuEbC6l8vvlRl5KEnvSRzKecWR5ezEFs0AZ2u3LCK5nw',

       });

      return this.http.get<AuthorNameModel>(url, {headers:headers});
    }


  //create Author
  postAuthor(name: string, date: string): Observable<AuthorRes>{
    const url = baseURLNG.concat('/api/app/author');

  const data = {
    name: name,
    birthday: date
  }

  const body = new HttpParams()
    .set('name', name)
    //.set('birthday', date)


  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Content-Length':'',
    'accept':'text/plain',
    'Accept-Encoding':'gzip, deflate, br',
    'Connection':'keep-alive',
    'Cookie':'.AspNetCore.Antiforgery.oeVmOJOPBWo=CfDJ8GzTajADOHpEuohzvesk0DKk9zBvfjkOIANWtLqw7pM1Q5TWb6tTC7omCzthh9XdBsLR-3eUu3Y4E2krWTkAQfbsfsTHHaYu02BWxAuqlruwQLhuqgwm2ROGxEyYQhZusek51A6tTN-cZ0FBX30TqZw; .AspNetCore.Identity.Application=CfDJ8GzTajADOHpEuohzvesk0DLJntL86h92h0zPdngNOTleYbtjRp6xXMxTSIyD0eBio3alobEiUk17gIdJORYpdk4Csq3hqj7tC6W2BkHvHD0-Qv_cENgS9siutbi-jaqVgjg8HNMXBD19MgVyvcsfFSLNkeF3oArAbmBne09-hok4pwlc4akSLCv13aMuIOwpMvXYwIWSGD8IZOclhnBeBYXVW8FsSqELwBcNXNDr1sbqbQgMJVYUi5QMGuEmcdSD7_N6_Z7bb_t2hzksyE4xrt_2F6zCxs5Fnb9_rBEWIsx7-ReFWtgFOL7ZGhI5YOlRTKyYDdKU8-hZEyeXxQT3h7u3LNGEHJbrWt669hdIGa6cZwq6t0YRSRBNmm3jeMKGL7R0s1zuLYxx2OzXABqodDpDSa0VbrXQVSSYiL4nygXmkzLP4i3phZz4y6glE5IXUHggBTkxTOFEl2CBooD766Q1XjwtN329lN8y13CH5MujK2Hv6xeSBKo1RHLKvNm8mBby3_OMxkg46WkVyGjP4oLgckWUZ_s0Qq5efUy9bXapT2Fmz3AUay9OzOY__-NJrkpXN9cnQtQ_7ZPlqsDY9q_7DNSuaGSaGppmQ0tPKme5xdjQFMd8o4I2FZw1GWD-3hIidChebtEmDz71vj2mUq2PwWajgfSqvc-VYqBrgodHWsIhbLQb8DPaE61dJP3f80jEdxmuzpHjBpnqCT4te1Kx9t4JSKPqSB0DkOO_3IJ8tMkGAYZbYIAE14IxYncSAs4FCjJ93DasKlmip0hZs-jeXXMedl08SV_idS2U9Q1d',
    'Cache-Control':'no-cache',
    //'X-Requested-With': 'XMLHttpRequest'
    //'Host':''
   });

  /* let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'accept':'text/plain' ,
    //'Cookie':'.AspNetCore.Antiforgery.oeVmOJOPBWo=CfDJ8GzTajADOHpEuohzvesk0DJ4dZlw5KPpXKz3LaDmOzWHN4Qlpa-5tIx4GG2rCToXDQ95vnD4uoXg9IbTIV4femHGaGlmIKyMxeMap5X9kJO-HsmxQVnMkAxqS8wSmOgoWZA5qEKmKV1F5D2Z6IGLjG4; .AspNetCore.Identity.Application=CfDJ8GzTajADOHpEuohzvesk0DKTBxKddg78V559m8r9l0kGsxOy-hlv6vspejWBpR3IZL6md7pZ5T0jLHFROt95C1lFTzls08pj91xrgMvbPC4JsOgcCX-lqMOFnFoQO5kAzXWXDIQJYo8aC13F_5it3r-a98rFMn9-CAYKM6Z_OCkVIyaWvQgMa6G9MielWkUmDREJjN0bNVEjfqkrtsMqHf333hoeizGBiEvuFWUown4U5zsU9IbVBAozYPuAgEoYEzG81tYE9OwAr1GHbjawkib7IHNwoNYyWsy4sWcU4fJXQ105onAcDzGIH3azNgtS-83MwvT4zkfXU60PImN7_nbvw7_TfNrNbSqUC8FT0aIDqD83B4BAeY8Q-4daWCy2iPjj42x7hQFHmE3BSNc2jtnrOBbcq9DRv7yYwTb6dV3rhk3Kz4rDSp3G9flw5xkqJ22tqteApqTZa68JFPOWZ-jhIid5NZdCCIs1LW6znGPpaBIDiAv6F5q9gjnMVyqQFfeLnFHhp7QnXYHiO7m27nOhLJGAH8IztZpQ8uznscYLGALflF9Ufuzva0QbliEY3JfGP-cbOzanFMMy8qoYTvKfdl2Bo3w2vPqrQe5gi54P6FiBpr79Bsyg95QfkV5xP7saoN2W9jZsXEa8GFu2lL7wXLqZ5ZQ8UpRMX_nAsMksExt6PeA9EWPDUJs0UPNis8LQoo1ouxhlQkOsXkYJp-sepx7UIruSvDMrpMMr7HrG1F5y0sNSZK27fP6-FOaWRNYhJNkyeGH8rWWP6cwCWRmN8rjqrH6qYJ7Th2G3n98b',
    'Cache-Control':'no-cache',
    //'Host':''
   }); */

   console.log('////////////////////////////////////create author data')
   //console.log(data);

   //console.log(body.toString());

   return this.http.post<AuthorRes>(url, date, {headers})

  }


///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //GENRE
   //ir buscar o genro atraves do id
   getGenreDesc(id:string) : Observable<GenreDesModel>{
    const url = baseURLNG.concat(this.GenreDes).concat(id);

     let headers = new HttpHeaders({
      'content-Type': 'x-access-token',
      'Connection':'keep-alive',
      'Accept-Encoding':'gzip, deflate, br',
      'Accept':'Accept',
      'Cache-Control':'no-cache',
      'Cookie':'.AspNetCore.Antiforgery.-NmeqT1udVE=CfDJ8GzTajADOHpEuohzvesk0DINKSJD2eJfkbl19J87oKdCOpoPSxRRact9zJLeuYirlwdxRHOdCoBtDGp6V8IKXszFNhBBIS8xOj-ABLbIuWq-kSRWxje79n-y8kRbKO2QnvOCkzqze8dnujDDPtS_cvU; .AspNetCore.Identity.Application=CfDJ8GzTajADOHpEuohzvesk0DL4lXWAPtaW2qMqon1KAta5UG-OIhpQS2wCCbiJvNQfL1SBiD5PVJ0dtrm0oZhBoAxdxeuj6lKz7T7HhSCC_XphFBeP0ItR5Zsy6zXFQylT3XWpTyIE8w2_FnZsGf8NrzKIHQN0AbRzoVl_J4HXXaHfhDIF0n_1d-D6syHYcBms4nOShi1MiMCRLwZKOHkZWdCGIAtZKnG1cnsD2aE_l3H2D1f9hVeBs-etHKZXVebLYHUdlmiyjFjk5EAA8smOiqxkfET84JvIHv2j7XqwLrG6HALgvKq5C3HkmkzEQB2BuKvZHeyWBRJy9pQnH1BwueTzbAEvYAhgKombLeU_Z3UjeoTf9qFfcFRAks7hN1Dlz4pVABDDwcnOt6fUutgYwZoGdZNzxndTqYL4NNVXKTZPoK5vaFz2yBCoXgSRE7RRPeAlGzGWK38KCRSiVQ3oCkemMhF2kzFBe3ZMr-w7bviNLjEN73PUHRTdTFrvqAomVJSsjJoFUyMaOUVEpHUX4bLYSIYW7OFjJ79RVO55NWqF-AatK1FgjFUY5-cL0yQz2m-4lKIk44Xnvy0DKL2y9u8H5EExP5GVtGrHXts6f_0YQc8jgQbhiZ6fzJYIytcpWnn72bB1_lQzUMc65sk-uMqtdFp51Rx_KFkT5l2xYu8n2F7mVVrbtlpAzT43X_lR2CbV_-jZKJGtQRUGc1wtBCnzO4f--zxhTYBZr-QtVfAEuEbC6l8vvlRl5KEnvSRzKecWR5ezEFs0AZ2u3LCK5nw',

     });

    return this.http.get<GenreDesModel>(url, {headers:headers});
  }

  //get para ir buscar todos os genres
  getGenresAll() : Observable<GenreRes>{
    const url = baseURLNG.concat('/api/app/genre');

    let headers = new HttpHeaders({
      'content-Type': 'x-access-token',
      'Connection':'keep-alive',
      'Accept-Encoding':'gzip, deflate, br',
      'Accept':'Accept',
      'Cache-Control':'no-cache',
      'Cookie':'.AspNetCore.Antiforgery.-NmeqT1udVE=CfDJ8GzTajADOHpEuohzvesk0DINKSJD2eJfkbl19J87oKdCOpoPSxRRact9zJLeuYirlwdxRHOdCoBtDGp6V8IKXszFNhBBIS8xOj-ABLbIuWq-kSRWxje79n-y8kRbKO2QnvOCkzqze8dnujDDPtS_cvU; .AspNetCore.Identity.Application=CfDJ8GzTajADOHpEuohzvesk0DL4lXWAPtaW2qMqon1KAta5UG-OIhpQS2wCCbiJvNQfL1SBiD5PVJ0dtrm0oZhBoAxdxeuj6lKz7T7HhSCC_XphFBeP0ItR5Zsy6zXFQylT3XWpTyIE8w2_FnZsGf8NrzKIHQN0AbRzoVl_J4HXXaHfhDIF0n_1d-D6syHYcBms4nOShi1MiMCRLwZKOHkZWdCGIAtZKnG1cnsD2aE_l3H2D1f9hVeBs-etHKZXVebLYHUdlmiyjFjk5EAA8smOiqxkfET84JvIHv2j7XqwLrG6HALgvKq5C3HkmkzEQB2BuKvZHeyWBRJy9pQnH1BwueTzbAEvYAhgKombLeU_Z3UjeoTf9qFfcFRAks7hN1Dlz4pVABDDwcnOt6fUutgYwZoGdZNzxndTqYL4NNVXKTZPoK5vaFz2yBCoXgSRE7RRPeAlGzGWK38KCRSiVQ3oCkemMhF2kzFBe3ZMr-w7bviNLjEN73PUHRTdTFrvqAomVJSsjJoFUyMaOUVEpHUX4bLYSIYW7OFjJ79RVO55NWqF-AatK1FgjFUY5-cL0yQz2m-4lKIk44Xnvy0DKL2y9u8H5EExP5GVtGrHXts6f_0YQc8jgQbhiZ6fzJYIytcpWnn72bB1_lQzUMc65sk-uMqtdFp51Rx_KFkT5l2xYu8n2F7mVVrbtlpAzT43X_lR2CbV_-jZKJGtQRUGc1wtBCnzO4f--zxhTYBZr-QtVfAEuEbC6l8vvlRl5KEnvSRzKecWR5ezEFs0AZ2u3LCK5nw',

     });

    return this.http.get<GenreRes>(url, {headers:headers});
  }


}
