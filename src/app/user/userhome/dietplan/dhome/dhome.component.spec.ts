import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhomeComponent } from './dhome.component';

describe('DhomeComponent', () => {
  let component: DhomeComponent;
  let fixture: ComponentFixture<DhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
