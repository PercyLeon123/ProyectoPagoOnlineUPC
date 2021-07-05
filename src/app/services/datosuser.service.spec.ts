import { TestBed } from '@angular/core/testing';

import { DatosuserService } from './datosuser.service';

describe('DatosuserService', () => {
  let service: DatosuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
