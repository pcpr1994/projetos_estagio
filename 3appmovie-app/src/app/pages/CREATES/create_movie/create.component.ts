import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { AuthorRes } from '~/app/core/models/authorRes';
import { GenreDesModel } from '~/app/core/models/genreDesc';
import { ApiService } from '~/app/core/services/apiserviceEx.service';
import {CreateMovie} from '../../../core/models/createMovie'
import { format } from 'date-fns';
import { Dialogs } from '@nativescript/core';
import { AuthorNameModel } from '~/app/core/models/authorName';
import {GenreRes} from '~/app/core/models/genreRes';

@Component({
  selector:'ns-create',
  templateUrl:'./create.component.html',
})

export class CreateComponent {

/* o que fazer para funcionar com a api
  -> fazer chamadas a API (get) para ir buscar os genre e Author que existem e colocar os dados nas drop down
  -> fazer passar todos os dados para string's e fazer um post para a API

*/

  /* da ListPicker
  public colors: string[] = ["Red", "Green", "Blue"];
    public selectedColor: string;

 */

    //dropDown
    /* public options = ["Aventure", "Comedy", "Terror"];
    public selectedOption: string; */

    //Genre
    public selectedIndexGenre = 1;
    public itemsGenre = [];
    public itemGenre2 : GenreRes;
   // public items=[];

    //Author
    public selectedIndexAuthor = 1;
    //public itemsAuthor2 : AuthorRes;
    public itemsAuthorList : AuthorRes;
    public itemsAuthor = [];
    //public itemsAuthorLIST = [];

    public countGenre: number;
    public countAuthor: number;



    //CONSTRUCTOR
    constructor(private router: Router,
      private apiService: ApiService) {
      /* this.itemsGenre = ["Aventure", "Comedy", "Terror "];
        for (var i = 0; i < 5; i++) {
            this.items.push("data item " + i);
        }

        //Author
       // this.itemsAuthor = ["Jason Reitman", "Peter Jackson", "Roman Polanski "];

        //console.log(this.itemsGenre);
*/
        apiService.getGenresAll().subscribe(res => {
          this.itemGenre2 = res;
          console.log("///////////////////////////////////////-------",this.itemGenre2);
          console.log(this.itemGenre2.items.length);
          var count = this.itemGenre2.items.length;
          this.countGenre= count;
          console.log('total de genre',count);
          for (var i = 0; i < count; i++) {
            var x = this.itemGenre2.items[i]?.description;
            //console.log(x);

            this.itemsGenre[i]= x;
            this.itemsGenre.push(x);
           // console.log(this.items[i]);
          }
       // console.log('////////////////////////////');
       console.log(this.itemsGenre);
        })
        console.log('////////////////////////////------------------');

        apiService.getAuthorAll().subscribe(res => {
          this.itemsAuthorList = res;
          console.log(this.itemsAuthorList);
          console.log(this.itemsAuthorList.items.length);
          const count = this.itemsAuthorList.items.length;
          console.log('numero de authores',count)


          this.countAuthor= count;
          console.log(count);

          for (let i = 0; i < count; i++) {
            var x = this.itemsAuthorList.items[i]?.name;
            this.itemsAuthor[i]=x;
            this.itemsAuthor.push(x);
           // console.log(x);

          }
          console.log(this.itemsAuthor);
        })
        //console.log('//////list ',this.itemGenre2.length);

    }

    //GENRE
 /*     public onchangeGenre(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
    }

    public onopenGenre() {
        console.log("Drop Down opened.");
    }

    public oncloseGenre() {
        console.log("Drop Down closed.");
    }
 */

/*
    // AUTHOR
    /* public onchangeAuthor(args: SelectedIndexChangedEventData) {
      console.log(`Drop Down selected author index changed from ${args.oldIndex} to ${args.newIndex}`);
    }

    public onopenAuthor() {
        //console.log("Drop Down opened.");
    }

    public oncloseAuthor() {
        //console.log("Drop Down closed.");
    }

*/



//variaveis auxiliares
     genr:string
     auth:string

    //CREATE BUTTON
    public create(title:string, genre:number, author:number, date:string, rating:number, price:number, plot:string) {

      if (title=='' || genre== null || author== null || date=='' ||rating==null|| price==null || plot=='')
      {
          Dialogs.alert({
            title: 'Alert',
            message: 'incomplete data',
            okButtonText: 'OK'
        }).then(() => {
            console.log('Alerta fechada');
        });

      }else{

      //ir buscar o genro escolhido
      for (let index = 0; index < this.itemsGenre.length; index++) {
        if (genre==index) {
          const element = this.itemsGenre[index];
          this.genr=element;
        }
      }
      var genreName = this.genr;
      var Idgenre:string;
      //console.log("genre",this.genr);

      //atraves do genro escolhido ir buscar o id a list para o post
      for (let i = 0; i < this.countGenre; i++) {
        if(this.itemGenre2[i]?.description === genreName) {
          Idgenre= this.itemGenre2[i]?.id;

        }
      }
      //console.log("genre",Idgenre);


      // ir buscar o author escolhido atraves da lista
      for (let index = 0; index < this.itemsAuthor.length; index++) {
        if (author==index) {
         // console.log(this.selectedIndexAuthor);
          const element = this.itemsAuthor[index];
          this.auth=element;
        }
      }
      //console.log("Author",this.auth);

      var authorName = this.auth;
      var Idauthor:string;

      //atraves do nome do author ir a lista buscar o id para o post
      for (let i = 0; i < this.countAuthor; i++) {
        if(this.itemsAuthorList[i]?.name === authorName) {
          Idauthor=this.itemsAuthorList[i]?.id;

      }
    }
      //console.log('AuthorID',Idauthor);
      const dataformate = this.convertToFormattedDateTime(date);
    console.log('data formatada',dataformate);

    console.log(title);
      console.log(dataformate);
      console.log(rating);
      console.log(price);
      console.log(plot);
      console.log("genre",Idgenre);
      console.log("author",Idauthor);
      console.log('fim');



      /* this.movie.authorId=Idauthor.toString();
      this.movie.genreid=Idgenre.toString(); */
      /* this.movie.title == title.toString();
      this.movie.releaseDate= dataformate.toString();
      this.movie.price=price;
      this.movie.rating=rating;
      this.movie.runtimeMins='0'
      this.movie.plot=plot;
      this.movie.writers="";
      this.movie.stars="";
      this.movie.countries= "",
      this.movie.languages= "",
      this.movie.idImdb= "",
      this.movie.awards= "",
      this.movie.linkEmbed= "",
      this.movie.videoDescription="",
      this.movie.linkPoster1= "",
      this.movie.linkPoster2= "",
      this.movie.image1= "",
      this.movie.image2=""
 */

      this.apiService.postMovieCreate(Idauthor,Idgenre,
       title,dataformate, price, rating, plot).subscribe(res=>{
        console.log(res);
        this.router.navigate(["/home"]);
       })

      }

    }

    cancel(){
      this.router.navigate(["/home"]);
    }


    public convertToFormattedDateTime(dateString: string): string {
      // Divida a string da data em dia, mês e ano
      const [day, month, year] = dateString.split('/');

      // Crie uma nova instância da classe Date com os valores da data
      const date = new Date(Number(year), Number(month) - 1, Number(day));

      // Formate a data usando a função format do date-fns
      const formattedDateTime = format(date, 'yyyy-MM-dd');

      // Retorne a data formatada
      return formattedDateTime;
  }

}
