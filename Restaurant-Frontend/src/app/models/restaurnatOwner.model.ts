
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
export class RestaurantOwnerClass{
    ownerFirstName = ""
    OwnerMiddleName = ""
    ownerLastName = ""
    countryCode = 0
    ownerMobileNumber = 0
    ownerEmail = ""
    governmentIdType = ""
    governmentId = ""
    password = "" 
}
  