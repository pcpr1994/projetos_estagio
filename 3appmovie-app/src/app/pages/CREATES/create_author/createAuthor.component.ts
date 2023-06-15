import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '~/app/core/services/apiserviceEx.service';
import { format } from 'date-fns';
import { AuthorRes } from '~/app/core/models/authorRes';

@Component({
  selector: 'ns-createAuthor',
  templateUrl: './createAuthor.component.html',
})

export class CreateAuthorComponent{

  data: string
  author : AuthorRes

  constructor(private router: Router, private apiService: ApiService){}


  createAuthor(name:string, birthday: string) {
    //create codigo para mandar para a API
    console.log('name:',name)
    console.log('date:',birthday)

    const dateString = "31/12/2022";
    const formattedDateTime = this.convertToFormattedDateTime(birthday);
    console.log('data formatada',formattedDateTime);





    this.apiService.postAuthor(name, formattedDateTime).subscribe((response:AuthorRes) =>{
      this.author = response
      console.log(this.author)
    })


  }



  cancel(){
    this.router.navigate(["/create"]);
  }


  public convertToFormattedDateTime(dateString: string): string {
    // Divida a string da data em dia, mês e ano
    const [day, month, year] = dateString.split('/');

    // Crie uma nova instância da classe Date com os valores da data
    const date = new Date(Number(year), Number(month) - 1, Number(day));

    // Formate a data usando a função format do date-fns
    const formattedDateTime = format(date, 'yyyy-MM-dd HH:mm:ss.SSS');

    // Retorne a data formatada
    return formattedDateTime;
}



}
