import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  host: {ngSkipHydration: 'true'},

})
export class LoginComponent {
  Login="Shop with Sura Medical";
 onLogin(){
  console.log("Login To Suraj Medical Hall")
 } 
}
