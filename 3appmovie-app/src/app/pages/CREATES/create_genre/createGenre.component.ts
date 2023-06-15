import { Component } from '@angular/core'
import { Router } from "@angular/router";


@Component({
  selector: 'ns-createGenre',
  templateUrl: './createGenre.component.html'

})

export class CreateGenreComponent {

  constructor(private router: Router){}



  createGenre(genre:string) {
    //create codigo para mandar para a API
    console.log(genre)
  }

  cancel(){
    this.router.navigate(["/create"]);
  }




}
