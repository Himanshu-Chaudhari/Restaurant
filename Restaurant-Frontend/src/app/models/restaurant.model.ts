
export interface Restaurant {
    restaurantName: string;
    mobileNo: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    country: string;
    restroType: 'veg' | 'nonVeg';
    speciality: string;
    foodLicense: string;
    serviceType: string;
    openingHour: string;
    clossingHour: string;
    logo?: string;
  }
  