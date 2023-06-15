import { Component } from '@angular/core'
import { Router } from "@angular/router";
import { ApiService } from '../../../core/services/apiserviceEx.service';
import { Dialogs } from '@nativescript/core';


@Component({
  selector: 'ns-createIMDB',
  templateUrl: './createIMDB.component.html',
})

export class CreateIMDBComponent {

  constructor(private router: Router,
    private apiService: ApiService) {
    /* console.log('create');
    console.log(localStorage.getItem("access_token")); */
  }


  createIDIMDB(idIMDB:string) {

    /* Dialogs.alert({
      title: 'Título da alerta',
      message: 'Mensagem da alerta',
      okButtonText: 'OK'
  }).then(() => {
      console.log('Alerta fechada');
  }); */

    //create codigo para mandar para a API
    console.log(idIMDB)
    this.apiService.postCreateMovieImdb(idIMDB).subscribe((result) => {
      //console.log(result);
      if (result == "success") {
        this.router.navigate(["/home"]);
      }else
      alert("Error al crear codigo");
    });
  }

  cancel(){
    this.router.navigate(["/home"]);
  }

}
