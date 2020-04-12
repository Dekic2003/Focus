import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcjeneuceniciComponent } from './ocjeneucenici.component';

describe('OcjeneuceniciComponent', () => {
  let component: OcjeneuceniciComponent;
  let fixture: ComponentFixture<OcjeneuceniciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcjeneuceniciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcjeneuceniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
