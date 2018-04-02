import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLandingViewComponent } from './main-landing-view.component';

describe('MainLandingViewComponent', () => {
  let component: MainLandingViewComponent;
  let fixture: ComponentFixture<MainLandingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLandingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLandingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
