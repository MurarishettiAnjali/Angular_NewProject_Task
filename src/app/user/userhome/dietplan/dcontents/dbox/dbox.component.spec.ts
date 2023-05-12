import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DboxComponent } from './dbox.component';

describe('DboxComponent', () => {
  let component: DboxComponent;
  let fixture: ComponentFixture<DboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
