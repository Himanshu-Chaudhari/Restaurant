import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.css']
})

export class RegisterRestaurantComponent {
  registerRestoGroup = new FormGroup({
    restaurantName : new FormControl() ,
    mobileNo : new FormControl() ,
    addressLine1 : new FormControl() ,
    addressLine2 : new FormControl() ,
    city : new FormControl() ,
    state : new FormControl() ,
    country : new FormControl() ,
    restroType : new FormControl() ,
    speciality : new FormControl() ,
    foodLicense : new FormControl() ,
    serviceType : new FormControl(), 
    openingHour : new FormControl() ,
    clossingHour : new FormControl() ,
    logo : new FormControl() 
  });

  onSubmit(){
    console.log(this.registerRestoGroup
      .valid
    )
  }
}
