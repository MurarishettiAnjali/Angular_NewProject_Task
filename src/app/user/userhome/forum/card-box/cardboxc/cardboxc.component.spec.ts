import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardboxcComponent } from './cardboxc.component';

describe('CardboxcComponent', () => {
  let component: CardboxcComponent;
  let fixture: ComponentFixture<CardboxcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardboxcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardboxcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
