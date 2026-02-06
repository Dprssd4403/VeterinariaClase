import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoresAcerca } from './doctores-acerca';

describe('DoctoresAcerca', () => {
  let component: DoctoresAcerca;
  let fixture: ComponentFixture<DoctoresAcerca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctoresAcerca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctoresAcerca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
