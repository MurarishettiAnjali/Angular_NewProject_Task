import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmainpageComponent } from './amainpage.component';

describe('AmainpageComponent', () => {
  let component: AmainpageComponent;
  let fixture: ComponentFixture<AmainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmainpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
