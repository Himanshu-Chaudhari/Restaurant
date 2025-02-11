type GovernmentIdType = "panCard" | "adharCard";
export class RestaurantOwnerClass{
    firstName: string = "";
    secondName: string = "";
    lastName: string = "";
    countryCode: string = "";
    mobileNo: string = "";
    email: string = "";
    governmentIdType: GovernmentIdType = "adharCard";
    governmentId: string = "";
    password: string = "";
}

export class RestaurantOwnerResponse{
    ownerId : Number = 0;
    firstName: string = "";
    secondName: string = "";
    lastName: string = "";
    countryCode: string = "";
    mobileNo: string = "";
    email: string = "";
    governmentIdType: GovernmentIdType = "adharCard";
    governmentId: string = "";
    password: string = "";
}

export class relationshipResponse{
    restaurantOwnerId : Number = 0;
    restaurantId :  Number = 0;
}
  