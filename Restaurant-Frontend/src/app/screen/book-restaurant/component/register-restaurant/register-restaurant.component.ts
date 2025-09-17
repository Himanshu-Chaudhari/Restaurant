import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators , FormBuilder } from '@angular/forms';
import { AddRestaurantService } from '../../services/addRestaurant/add-restaurant.service';
import { RestaurantRequest } from 'src/app/models/restaurant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.css']
})

export class RegisterRestaurantComponent {

  restaurantDetails : FormGroup

  constructor(private formBuilder : FormBuilder, private addRestaurantService : AddRestaurantService, private router : Router){

    this.restaurantDetails = this.formBuilder.group({
      restaurantName : new FormControl("",[Validators.maxLength(50),Validators.required]) ,
      mobileNo : new FormControl("",[
        Validators.required,
        Validators.pattern("^[0-9]{10}$") 
      ]),
      addressLine1 : new FormControl<string>("",[Validators.required]) ,
      addressLine2 : new FormControl() ,
      city : new FormControl("",[Validators.required]) ,
      state : new FormControl("",Validators.required) ,
      country : new FormControl("",Validators.required) ,
      restroType : new FormControl("",Validators.required) ,
      speciality : new FormControl("") ,
      email : new FormControl("") ,
      pincode : new FormControl("") ,
      foodLicense : new FormControl("") ,
      serviceType : new FormControl(""), 
      openingHour : new FormControl("",Validators.required) ,
      clossingHour : new FormControl("",Validators.required) ,
      logo : new FormControl() 
    })

  }

  restaurantRequest!: RestaurantRequest

  captureDetails(){
    if(this.restaurantDetails.valid){
      this.createRequest(this.restaurantDetails);
      alert("restro added")
      // this.router.navigate(['/'])
    }else{
      alert("Invalid Input")
    }
  }

  createRequest(restaurantDetails : FormGroup){
    this.restaurantRequest = new RestaurantRequest();
    this.restaurantRequest.restaurantName = restaurantDetails.value['restaurantName'];
    this.restaurantRequest.mobileNo = restaurantDetails.value['mobileNo'];
    this.restaurantRequest.email = restaurantDetails.value['email'];
    this.restaurantRequest.addressLine1 = restaurantDetails.value['addressLine1'];
    this.restaurantRequest.addressLine2 = restaurantDetails.value['addressLine2'];
    this.restaurantRequest.city = restaurantDetails.value['city'];
    this.restaurantRequest.state = restaurantDetails.value['state'];
    this.restaurantRequest.country = restaurantDetails.value['country'];
    this.restaurantRequest.pincode = restaurantDetails.value['pincode'];
    this.restaurantRequest.foodLicense = restaurantDetails.value['foodLicense'];
    this.restaurantRequest.openingHour = restaurantDetails.value['openingHour'];
    this.restaurantRequest.clossingHour = restaurantDetails.value['clossingHour'];
    this.restaurantRequest.logo = restaurantDetails.value['logo'];
    this.restaurantRequest.restroType = restaurantDetails.value['restroType'];
    this.restaurantRequest.speciality = restaurantDetails.value['speciality'];
    this.restaurantRequest.serviceType = restaurantDetails.value['serviceType'];
    this.addRestaurantService.addRestaurant(this.restaurantRequest);
  }
}
