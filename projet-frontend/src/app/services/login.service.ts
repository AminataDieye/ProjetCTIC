import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  redirectUrl: string;
  constructor(private router: Router, private http: HttpClient) { }

  seConnecter(user) {
    console.log("in service ", user)
    return this.http.post(`${environment.BASE_API_URL}/login`, user);
  }

  seDeconnecter(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/accueil']);
  }
}


/* service
   login(login, password){
    return this.http.post('/login',{login: login, password: password});
  }
}
*/






