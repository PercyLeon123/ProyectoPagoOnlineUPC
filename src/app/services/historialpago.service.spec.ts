import { TestBed } from '@angular/core/testing';

import { HistorialpagoService } from './historialpago.service';

describe('HistorialpagoService', () => {
  let service: HistorialpagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialpagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
