import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare function InitFunction():any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private router : Router) { }
  login(){
    this.router.navigateByUrl('/');
    InitFunction();
  }
}
