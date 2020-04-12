import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadacauceniciComponent } from './zadacaucenici.component';

describe('ZadacauceniciComponent', () => {
  let component: ZadacauceniciComponent;
  let fixture: ComponentFixture<ZadacauceniciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZadacauceniciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZadacauceniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
