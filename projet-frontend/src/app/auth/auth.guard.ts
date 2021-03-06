import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from "../services/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = state.url;
      return  this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    if (this.loginService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.loginService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    
  }
}
//component 
 /* seConnecter(identifiants){
    this.loginService.login(identifiants.login, identifiants.password).subscribe(
      (data)=>{
        this.router.navigate(['/archive']);
      },
      (error)=>{
        alert('identifiants incorrectes ')
      }
    )
    
  }*/
  // service
  /* login(login, password){
    return this.http.post('/login',{login: login, password: password});
  }

  // API
  // if user exists
  // res.json(user data)
  // otherwise
  // res.status(404).json()
}

*/