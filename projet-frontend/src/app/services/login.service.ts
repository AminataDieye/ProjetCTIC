import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService{

  isLoggedIn=false;
  redirectUrl: string;
  constructor(private router:Router, private http: HttpClient) {}

  seConnecter(login, password) {
    return this.http.post('/login', {login: login, password: password});
}

seDeconnecter():void{
  this.isLoggedIn=false;
  this.router.navigate(['/accueil']);
} 
}
/* service
   login(login, password){
    return this.http.post('/login',{login: login, password: password});
  }
}
*/


  

  

