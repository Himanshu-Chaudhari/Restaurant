import { Component } from '@angular/core';
import { Restaurant } from '../../../../models/restaurant.model';

@Component({
  selector: 'app-resto-card',
  templateUrl: './resto-card.component.html',
  styleUrls: ['./resto-card.component.css']
})

export class RestoCardComponent {
    Restaurants : Restaurant[]=[{
        restaurantName : "Kanha",
        mobileNo : "0000000000",
        addressLine1 : "Iskcon Chowk Kondwa",
        city : "Pune",
        state : "Maharashtra",
        country : "India",
        restroType : "veg" ,
        speciality : "Nothing",
        foodLicense : "Not Approved",
        serviceType : "Very Bad",
        openingHour : "12:00 pm",
        clossingHour : "11:00 pm",
        logo : 'https://lh3.googleusercontent.com/p/AF1QipMfPjyCNvE5cU-7X45InJZOI6ewDwe8E1DdmrN8=s1360-w1360-h1020'
      },{
        restaurantName : "Gokul",
        mobileNo : "0000000000",
        addressLine1 : "Infront of Gokul Nagar",
        city : "Pune",
        state : "Maharashtra",
        country : "India",
        restroType : "veg" ,
        speciality : "Nothing",
        foodLicense : "Not Approved",
        serviceType : "Very Bad",
        openingHour : "12:00 pm",
        clossingHour : "11:00 pm"
      },
      {
        restaurantName : "Gokul",
        mobileNo : "0000000000",
        addressLine1 : "Infront of Gokul Nagar",
        city : "Pune",
        state : "Maharashtra",
        country : "India",
        restroType : "veg" ,
        speciality : "Nothing",
        foodLicense : "Not Approved",
        serviceType : "Very Bad",
        openingHour : "12:00 pm",
        clossingHour : "11:00 pm"
      },
      
    ]
}
