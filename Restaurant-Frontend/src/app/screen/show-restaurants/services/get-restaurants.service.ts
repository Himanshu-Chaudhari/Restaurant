import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantRequest, RestaurantResponse } from 'src/app/models/restaurant.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetRestaurantsService {
  private restaurantsSubject = new BehaviorSubject<RestaurantRequest[]>([]);
  restaurants$ = this.restaurantsSubject.asObservable();
  constructor(private httpClient: HttpClient) { }
  
  getRestaurants(){
    return this.httpClient.get<RestaurantResponse[]>('http://localhost:8080/restaurant/all');;
  }
}

  // Observables , Subjects and services 
  // Java :- Stream API