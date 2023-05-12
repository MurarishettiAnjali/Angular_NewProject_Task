import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AformComponent } from './aform.component';

describe('AformComponent', () => {
  let component: AformComponent;
  let fixture: ComponentFixture<AformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
