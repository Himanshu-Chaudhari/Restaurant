import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';import { RestaurantRequest } from 'src/app/models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class AddRestaurantService {

  constructor(private httpClient : HttpClient ) {}
  
  addRestaurant(addRestaurantRequest : RestaurantRequest){
    console.log(addRestaurantRequest);
  }
}
