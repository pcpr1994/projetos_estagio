import { Injectable } from '@angular/core';
import { CustomStorageService } from './CustomStorageService.service';

@Injectable({
  providedIn: 'root'
})

export  class TokenService {
    constructor(private storage: CustomStorageService){

    }

    getToken(): String {
        return this.storage.getItem('access_token')!;
    }

    saveToken(token: String) {
        this.storage.setItem('token',token);
    }

    destroyToken() {
        this.storage.removeItem('token');
    }

    destroyAll(){
        this.storage.removeItem('access_token');
        this.storage.removeItem('username');
        this.storage.removeItem('password');
        this.storage.removeItem('token_type');
        this.storage.removeItem('expires_in');
        this.storage.removeItem('id_token');
        this.storage.removeItem('refresh_token');
    }

    destroyUser() {
        this.storage.removeItem( 'currentUser' );
    }

    cleanLocalStorage() {
        this.storage.clear();
    }

}
