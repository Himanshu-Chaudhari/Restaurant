import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddRestaurantService } from '../../services/addRestaurant/add-restaurant.service';
import { RestaurantOwnerClass } from 'src/app/models/restaurnatOwner.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.css']
})
export class RegisterOwnerComponent {
  
  ownerRequest !: RestaurantOwnerClass

  constructor(private addRestaurantService : AddRestaurantService, private router : Router){};

  ownerEntryForm = new FormGroup({
    firstName : new FormControl<string>("",Validators.required) ,
    secondName : new FormControl<string>("",Validators.required) ,
    lastName : new FormControl<string>("",Validators.required) ,
    countryCode : new FormControl<string>("") ,
    mobileNo : new FormControl<string>("") ,
    email : new FormControl<string>("") ,
    governmentIdType : new FormControl<string>("") ,
    governmentId : new FormControl<string>("") ,
    password : new FormControl<string>("")
  })

  onSubmit(){
    if(this.ownerEntryForm.valid){
      this.ownerRequest = new RestaurantOwnerClass();
      this.createRequest(this.ownerEntryForm);
      this.addRestaurantService.addOwner
      alert("Owner Added")
      this.router.navigate(['/'])
    }else{
      alert("Invalid request")
    }
  }

  createRequest(restaurantDetails : FormGroup){
      this.ownerRequest = new RestaurantOwnerClass();
      this.ownerRequest.firstName = restaurantDetails.value['firstName'];
      this.ownerRequest.mobileNo = restaurantDetails.value['mobileNo'];
      this.ownerRequest.email = restaurantDetails.value['email'];
      this.ownerRequest.secondName = restaurantDetails.value['secondName'];
      this.ownerRequest.lastName = restaurantDetails.value['lastName'];
      this.ownerRequest.governmentId = restaurantDetails.value['governmentId'];
      this.ownerRequest.governmentIdType = restaurantDetails.value['governmentIdType'];
      this.ownerRequest.password = restaurantDetails.value['password'];
      this.ownerRequest.countryCode = restaurantDetails.value['countryCode'];
      this.addRestaurantService.addOwner(this.ownerRequest)
  }
}

