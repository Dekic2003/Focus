import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppstackComponent } from './appstack.component';

describe('AppstackComponent', () => {
  let component: AppstackComponent;
  let fixture: ComponentFixture<AppstackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppstackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
