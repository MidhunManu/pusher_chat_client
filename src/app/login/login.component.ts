import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = "";
  constructor(private router: Router) {}
  login() {
    console.log(this.username)
    this.router.navigate(["chat"], {state: {currentUser: this.username}});
  }
}
