import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { ApiService } from "../../core/services/apiserviceEx.service";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from "rxjs";
import { returnedLogin } from "~/app/core/models/returnLogin";
import {CustomStorageService} from "../../core/services/CustomStorageService.service"
import { TokenService } from "~/app/core/services/tokenService.service";
@Component({
  selector: 'ns-login',
  templateUrl: './loginEx.component.html',

})

export class LoginExComponent {
  /* email: string;
  password: string; */

  public tokengerado: string;



  constructor(private authService:ApiService,
     private router: Router,
     private http: HttpClient,
     private tokenservice: TokenService,
     private localStorageService: CustomStorageService)
     {

        }

  login(username:string, password:string){

    console.log("user: ", username);
    console.log(username);
    console.log("password: ", password);
    console.log(password);

    //this.authService.login2(username, password);



    this.authService.login(username, password).subscribe(
       (result:returnedLogin) =>{
        console.log("///////////////////////////////////RESULT///////////////////////////");
        //console.log(result.refresh_token);
        this.localStorageService.setItem("access_token", "Bearer " + result.access_token);
        this.localStorageService.setItem("username", username);
        this.localStorageService.setItem("password", password);
        this.localStorageService.setItem("token_type", result.token_type);
        this.localStorageService.setItem("expires_in", result.expires_in);
        this.localStorageService.setItem("id_token", result.id_token);
        this.localStorageService.setItem("refresh_token",result.refresh_token);

        //console.log(localStorage.getItem("username"));
        this.tokenservice.saveToken("Bearer " + result.access_token);
        //console.log(result.access_token);
        this.tokengerado= result.access_token.toString();

        /* this.authService.postLogin(this.tokengerado).subscribe(res => {
          console.log('//////////////////////////////////////getlogin');
        // console.log(res);
          console.log('//////////////////////////////////////fimlogin');
        }) */

        this.router.navigate(["home"]);
      }
    );

  }
}
