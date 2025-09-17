import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantRequest } from 'src/app/models/restaurant.model';
import { RestaurantOwnerClass } from 'src/app/models/restaurnatOwner.model';

@Injectable({
  providedIn: 'root'
})
export class AddRestaurantService {

  constructor(private httpClient : HttpClient ) {}
  
  addRestaurant(addRestaurantRequest : RestaurantRequest){
    return this.httpClient.post('http://localhost:8080/restaurant/register',addRestaurantRequest).subscribe((respose)=>{
      console.log(respose);
    });
  }

  addOwner(addOwnerRequest : RestaurantOwnerClass){
    return this.httpClient.post('http://localhost:8080/owner/registerOwner',addOwnerRequest).subscribe((respose)=>{
      console.log(respose);
    });
  }
}
