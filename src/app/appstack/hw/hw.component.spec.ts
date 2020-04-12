import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HWComponent } from './hw.component';

describe('HWComponent', () => {
  let component: HWComponent;
  let fixture: ComponentFixture<HWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
