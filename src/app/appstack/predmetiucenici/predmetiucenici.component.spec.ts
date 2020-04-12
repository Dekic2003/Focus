import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetiuceniciComponent } from './predmetiucenici.component';

describe('PredmetiuceniciComponent', () => {
  let component: PredmetiuceniciComponent;
  let fixture: ComponentFixture<PredmetiuceniciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredmetiuceniciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetiuceniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
