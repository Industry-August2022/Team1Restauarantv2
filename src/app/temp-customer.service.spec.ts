import { TestBed } from '@angular/core/testing';

import { TempCustomerService } from './temp-customer.service';

describe('TempCustomerService', () => {
  let service: TempCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
