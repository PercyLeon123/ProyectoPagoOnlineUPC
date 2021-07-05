import { TestBed } from '@angular/core/testing';

import { PagoPendienteService } from './pago-pendiente.service';

describe('PagoPendienteService', () => {
  let service: PagoPendienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagoPendienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
