import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  employees = [
    {name : "Himanshu" , age : 18},
    {name : "Pranav" , age : 24}
  ]

  sayHello(){
    console.log("I was called")
    alert("hello")
  }
}
