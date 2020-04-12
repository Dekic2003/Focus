import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarloggedComponent } from './navbarlogged.component';

describe('NavbarloggedComponent', () => {
  let component: NavbarloggedComponent;
  let fixture: ComponentFixture<NavbarloggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarloggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarloggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
