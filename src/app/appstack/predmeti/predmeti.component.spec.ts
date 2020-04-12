import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetiComponent } from './predmeti.component';

describe('PredmetiComponent', () => {
  let component: PredmetiComponent;
  let fixture: ComponentFixture<PredmetiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredmetiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
