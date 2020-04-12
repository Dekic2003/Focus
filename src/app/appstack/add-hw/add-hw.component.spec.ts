import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHWComponent } from './add-hw.component';

describe('AddHWComponent', () => {
  let component: AddHWComponent;
  let fixture: ComponentFixture<AddHWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
