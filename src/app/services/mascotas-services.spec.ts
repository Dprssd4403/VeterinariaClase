import { TestBed } from '@angular/core/testing';

import { MascotasServices } from './mascotas-services';

describe('MascotasServices', () => {
  let service: MascotasServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MascotasServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
