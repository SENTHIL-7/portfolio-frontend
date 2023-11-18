import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHomeBannerComponent } from './basic-home-banner.component';

describe('BasicHomeBannerComponent', () => {
  let component: BasicHomeBannerComponent;
  let fixture: ComponentFixture<BasicHomeBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicHomeBannerComponent]
    });
    fixture = TestBed.createComponent(BasicHomeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
