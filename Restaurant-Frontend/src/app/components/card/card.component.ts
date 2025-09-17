import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestaurantRequest, RestaurantResponse } from 'src/app/models/restaurant.model';
import { RestaurantOwnerResponse } from 'src/app/models/restaurnatOwner.model';
import { OwnerServiceService } from 'src/app/service/owner-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() restaurant: RestaurantResponse = new RestaurantResponse();
  @Input() index: number = 0;
  @Output() hideRestaurant: EventEmitter<number> = new EventEmitter();

  selectedOwner: number = 0;

  owners: RestaurantOwnerResponse[] = [];
  constructor(private ownerService: OwnerServiceService) {
    this.getAllOwners()
  }

  sendHideRequest() {
    this.hideRestaurant.emit(this.index);
  }

  getAllOwners() {
    this.ownerService.getAllOwners().subscribe({
      next: (owners) => {
        console.log("Owners :- ", owners);
        this.owners = owners;
      },
    });
  }

  async addNewOwnerToRestaurant() {
    console.log(this.owners, this.selectedOwner);
    if (this.selectedOwner == 0) {
      alert("Please select a owner")
      return;
    }
    let owner = this.owners.find(ele => ele.ownerId == this.selectedOwner)
    if (owner) {
      if(await this.ownerService.addNewOwnerToRestaurant(owner, this.restaurant)){
        alert("Owner added to restaurant")
      }
    } else {
      alert("Unable to add the owner now")
      return;
    }
  }
}
