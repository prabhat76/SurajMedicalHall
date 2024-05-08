import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  host: {ngSkipHydration: 'true'},

})
export class LoginComponent implements OnInit{

  //username:string;
  //password:string;

  ngOnInit(): void {
   
  }
  constructor(private router:Router){
    
  }
  Login="Shop with Suraj Medical";
 onLogin(){
  // if (this.username === 'admin' && this.password === 'password') {
  //   console.log("Login To Suraj Medical Hall");
  //   return this.router.navigate(['/dashbaord']);
  //   } else{
  console.log("Login To Suraj Medical Hall");
  return this.router.navigate(['/dashbaord']);
 } 
}
