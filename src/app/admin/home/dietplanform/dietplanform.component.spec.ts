import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietplanformComponent } from './dietplanform.component';

describe('DietplanformComponent', () => {
  let component: DietplanformComponent;
  let fixture: ComponentFixture<DietplanformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietplanformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietplanformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
