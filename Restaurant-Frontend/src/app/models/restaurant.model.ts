type restroType = 'veg' | 'nonVeg'
export class RestaurantRequest {
    restaurantName : String = "";
    mobileNo : String= "";
    email : String = "";
    addressLine1 : String = "";
    addressLine2? : String = "";
    city : String = ""; 
    state : String = "";
    country : String = "";
    pincode : String = ""
    restroType : restroType = "veg";
    speciality : String  = "";
    foodLicense : String = "";
    serviceType : String = "";
    openingHour : String = "";
    clossingHour : String = "";
    logo? : String = "";
}

export class RestaurantResponse {
    restaurantId :  Number = 0;
    restaurantName : String = "";
    mobileNo : String= "";
    email : String = "";
    addressLine1 : String = "";
    addressLine2? : String = "";
    city : String = ""; 
    state : String = "";
    country : String = "";
    pincode : String = ""
    restroType : restroType = "veg";
    speciality : String  = "";
    foodLicense : String = "";
    serviceType : String = "";
    openingHour : String = "";
    clossingHour : String = "";
    logo? : String = "";
}
  