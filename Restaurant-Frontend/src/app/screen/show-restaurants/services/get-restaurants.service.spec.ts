import { TestBed } from '@angular/core/testing';

import { GetRestaurantsService } from './get-restaurants.service';

describe('GetRestaurantsService', () => {
  let service: GetRestaurantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRestaurantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
