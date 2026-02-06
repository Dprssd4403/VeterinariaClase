import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAcerca } from './card-acerca';

describe('CardAcerca', () => {
  let component: CardAcerca;
  let fixture: ComponentFixture<CardAcerca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAcerca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAcerca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
