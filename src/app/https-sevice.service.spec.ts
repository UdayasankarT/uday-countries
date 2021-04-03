import { TestBed } from '@angular/core/testing';

import { HttpsSeviceService } from './https-sevice.service';

describe('HttpsSeviceService', () => {
  let service: HttpsSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpsSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
