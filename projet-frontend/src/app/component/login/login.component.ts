import { Component, OnInit } from '@angular/core';
import { LoginService } from "src/app/services/login.service";
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  titre: string = "Veillez vous Connecter";
  color: string = '';
  succes: boolean;
  error: boolean;
  normal: boolean;
  message;


  constructor(private loginService: LoginService, private router: Router) {


  }

  ngOnInit() {

  }

  changerTitle(customerdata) {
    this.titre = customerdata.titre;

  }


  seConnecter(login, password) {

    const user = { login, password }

    this.loginService.seConnecter(user).subscribe(
      (data) => {
        console.log("user", user)
        this.router.navigateByUrl('/accueil-admin')

      },
      (error) => {
        alert('identifiants incorrectes ')
      }
    )

  }
}
