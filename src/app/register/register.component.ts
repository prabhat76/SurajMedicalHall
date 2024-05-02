import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  Username="Username";
  Email="Email Id";
  Number="Phone Number";
  Password="Password";
  Forget="Forget";

  getDashboard(){
    console.log("Welcome to Suraj Medical hall")
  }
}
