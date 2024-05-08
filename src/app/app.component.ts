import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { error } from 'console';
import { appendFileSync } from 'fs';
import { Observable, sample } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {ngSkipHydration: 'true'}, 
  template:`<div>
    <h1><title>Home</title></h1>
  </div>`

})


export class AppComponent implements OnInit{
  title = 'SurajMedicall';

  
  ngOnInit(){
this.myObservable.subscribe((val:any, num:number)=>{
  console.log(val);
  console.log(num)
},
(error:any)=>{
  alert(error.message);
},
()=>{
  alert('the callback function is succesful and now can break anytime soon')
}),
this.myArrayObservable.subscribe((num:any)=>{
  console.log(num)
}
)
  }

  myObservable = Observable.create((sample :any )=>{
    setTimeout(()=>sample.next("A"));
    setTimeout(()=>num.slice(2, 4))
    setTimeout(()=> {sample.complete()}, 1000);
    
    // setTimeout(()=> {sample.error(new Error('Something went wrong , Plese try again soem time later')), 4000}
    // )
  })

  myArrayObservable = Observable.create((samplee :any) =>{
    setTimeout(()=>samplee.num);
  })

}

let num= [1,2,3,4,5,6,7,8,9];
console.log(num);
let num1=num.slice(2);
console.log(num1)