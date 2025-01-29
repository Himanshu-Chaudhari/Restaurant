
export interface RestaurantOwner{
    ownerFirstName : string,
    OwnerMiddleName : string,
    ownerLastName : string,
    countryCode : string,
    ownerMobileNumber : string,
    ownerEmail : string,
    governmentIdType : "pancard" | "aadharcard"
    governmentId : string
    password :string 
}
  