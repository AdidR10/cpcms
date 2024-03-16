import { TestBed } from '@angular/core/testing';

import { NevigationsService } from './nevigations.service';

describe('NevigationsService', () => {
  let service: NevigationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NevigationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
