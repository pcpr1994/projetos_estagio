import { AuthService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
[x: string]: any;
  get hasLoggedIn(): boolean {
    return this.authService.isAuthenticated;
  }

  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.isAuthenticated){
      this.router.navigate(['/movie']);
    }
  }

  login() {
    this.authService.navigateToLogin();


  }
}
