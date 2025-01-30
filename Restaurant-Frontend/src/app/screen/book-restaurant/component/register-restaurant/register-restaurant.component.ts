import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.css']
})

export class RegisterRestaurantComponent {
  registerRestoGroup = new FormGroup({
    restaurantName : new FormControl("",[Validators.maxLength(50),Validators.required]) ,
    mobileNo : new FormControl([[
      Validators.required,
      Validators.pattern("^[0-9]{10}$") 
    ]]),
    addressLine1 : new FormControl("",[Validators.required]) ,
    addressLine2 : new FormControl() ,
    city : new FormControl("",[Validators.required]) ,
    state : new FormControl("",Validators.required) ,
    country : new FormControl("",Validators.required) ,
    restroType : new FormControl("",Validators.required) ,
    speciality : new FormControl() ,
    foodLicense : new FormControl() ,
    serviceType : new FormControl(), 
    openingHour : new FormControl("",Validators.required) ,
    clossingHour : new FormControl("",Validators.required) ,
    logo : new FormControl() 
  });

  onSubmit(){
    console.log(this.registerRestoGroup
      .valid
    )
  }
}
