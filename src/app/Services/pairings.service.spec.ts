import { TestBed } from '@angular/core/testing';

import { PairingsService } from './pairings.service';

describe('PairingsService', () => {
  let service: PairingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PairingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
