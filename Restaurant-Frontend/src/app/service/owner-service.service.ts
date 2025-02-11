import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { relationshipResponse, RestaurantOwnerClass, RestaurantOwnerResponse } from '../models/restaurnatOwner.model';
import { firstValueFrom, Observable } from 'rxjs';
import { RestaurantResponse } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerServiceService {
  constructor(private httpClient: HttpClient) { }

  getAllOwners(): Observable< RestaurantOwnerResponse[]> {
    return this.httpClient.get< RestaurantOwnerResponse[] >(
      'http://localhost:8080/owner/getAllOwners'
    );
  }

  async addNewOwnerToRestaurant(owner: RestaurantOwnerResponse, restaurant: RestaurantResponse): Promise<boolean> {

    const owners = await firstValueFrom(
      this.httpClient.get<relationshipResponse[]>(`http://localhost:8080/restaurant/getRestaurantOwners?param=${restaurant.restaurantId}`)
    );

    if (owners.some((ele) => ele.restaurantOwnerId === owner.ownerId)) {
      alert('Restaurant already has this owner registered');
      return false;
    }

    const response = await firstValueFrom(
      this.httpClient.post<boolean>('http://localhost:8080/restaurant/addOwner', {
        ownerId: owner.ownerId,
        restaurantId: restaurant.restaurantId,
      })
    );
    console.log(response);
    return response;
  }
}