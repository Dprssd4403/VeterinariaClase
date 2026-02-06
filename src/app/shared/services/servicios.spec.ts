import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicios } from './servicios';

describe('Services', () => {
  let component: Servicios;
  let fixture: ComponentFixture<Servicios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servicios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
