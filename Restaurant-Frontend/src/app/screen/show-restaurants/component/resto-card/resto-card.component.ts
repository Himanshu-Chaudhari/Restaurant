import { Component, Input } from '@angular/core';
import { GetRestaurantsService } from '../../services/get-restaurants.service';
import { RestaurantRequest, RestaurantResponse } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-resto-card',
  templateUrl: './resto-card.component.html',
  styleUrls: ['./resto-card.component.css']
})

export class RestoCardComponent {

  @Input() hide : number = -1;
  constructor(private getResto : GetRestaurantsService ){
    this.toggleRestaurants();
  }
  
  Restaurants : RestaurantResponse[]=[]

  buttonText = "Show Restaurants";
  showRestaurant = false;

  toggleRestaurants() {
    this.showRestaurant = !this.showRestaurant;
    this.buttonText = this.showRestaurant ? "Hide Restaurants" : "Show Restaurants";
    if (this.showRestaurant) {
      this.getResto.getRestaurants().subscribe({
        next: (restaurants) => {
          console.log(restaurants);
          this.Restaurants = restaurants;
        },
        error: (err) => console.error(err),
      });
    }else{
      this.Restaurants = [];
    }
    console.log(this.Restaurants);
  }

  handleHideRestaurant(index: number) {
    this.Restaurants.splice(index, 1); 
  }
}
