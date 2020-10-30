import { RegisterUserModel } from 'src/RegisterUserModel';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: RegisterUserModel = new RegisterUserModel();

  errorMessage: string = null;
  submittedForm: boolean = true;

  constructor() { }

  ngOnInit(): void { }

  onSubmit(registerForm: NgForm): void {
    const email: string = registerForm.value.email;
    const pseudo: string = registerForm.value.pseudo;
    const password: string = registerForm.value.password;
    const confirmation: string = registerForm.value.passwordConfirmation;

    if (typeof email === 'undefined') {
      this.errorMessage = 'Veuillez renseigner une adresse email';
      return;
    }

    if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))) {
      this.errorMessage = `Le format de l'adresse email est incorrect`;
      return;
    }

    if (typeof pseudo === 'undefined') {
      this.errorMessage = `Veuillez renseiner un pseudo`;
      return;
    }

    if (!(/[a-z0-9]{3,50}/i.test(pseudo))) {
      this.errorMessage = `Le format du pseudo est incorrect`;
      return;
    }

    if (typeof password === 'undefined') {
      this.errorMessage = `Veuillez renseigner un mot de passe`;
      return;
    }

    if (!(/[a-z0-9]{6,50}/i.test(password))) {
      this.errorMessage = `Le format du mot de passe est incorrect`;
      return;
    }

    if (typeof confirmation === 'undefined') {
      this.errorMessage = `Veuillez confirmer le mot de passe`;
      return;
    }

    if (confirmation !== password) {
      this.errorMessage = `Le mot de passe et sa confirmation sont différents`;
      return;
    }

    this.submittedForm = true;
  }

  onInputFocus(): void {
    this.errorMessage = null;
  }
}
