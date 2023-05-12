import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcontentsComponent } from './dcontents.component';

describe('DcontentsComponent', () => {
  let component: DcontentsComponent;
  let fixture: ComponentFixture<DcontentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcontentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcontentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
