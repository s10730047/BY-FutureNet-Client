import { TestBed } from '@angular/core/testing';

import { FuturesDataService } from './futures-data.service';

describe('FuturesDataService', () => {
  let service: FuturesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuturesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
