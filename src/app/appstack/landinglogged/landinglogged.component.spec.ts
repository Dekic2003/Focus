import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingloggedComponent } from './landinglogged.component';

describe('LandingloggedComponent', () => {
  let component: LandingloggedComponent;
  let fixture: ComponentFixture<LandingloggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingloggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingloggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
