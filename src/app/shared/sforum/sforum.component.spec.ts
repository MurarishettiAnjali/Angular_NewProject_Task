import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SforumComponent } from './sforum.component';

describe('SforumComponent', () => {
  let component: SforumComponent;
  let fixture: ComponentFixture<SforumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SforumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
