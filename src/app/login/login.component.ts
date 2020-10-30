import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUserModel } from 'src/LoginUserModel';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  errorMessage: string = null;
  model: LoginUserModel = new LoginUserModel();

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void { }

  onSubmit(loginForm: NgForm): void {
    this.errorMessage = null;

    const email: string = loginForm.value.email;
    const password: string = loginForm.value.password;

    if (typeof email === 'undefined') {
      this.errorMessage = 'Veuillez renseigner une adresse email';
      return;
    }

    if (typeof password === 'undefined') {
      this.errorMessage = 'Veuillez renseigner un mot de passe';
      return;
    }

    this.loginService.login(email, password).subscribe((loginData: any) => {
      this.router.navigate(['menu']);
    }, error => {
      this.errorMessage = error.message;
    });
  }

  onInputFocus(): void {
    this.errorMessage = null;
  }
}
