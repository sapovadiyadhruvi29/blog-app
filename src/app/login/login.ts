import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
    onSubmit(form: any) {
    if (form.valid) {
      console.log(form.value);
      alert("Login Successful");
    } else {
      alert("Form Invalid");
    }
  
  }


}

