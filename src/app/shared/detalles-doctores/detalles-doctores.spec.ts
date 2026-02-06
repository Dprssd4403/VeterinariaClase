import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDoctores } from './detalles-doctores';

describe('DetallesDoctores', () => {
  let component: DetallesDoctores;
  let fixture: ComponentFixture<DetallesDoctores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesDoctores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesDoctores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
