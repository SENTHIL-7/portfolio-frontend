import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHomeAboutSummaryComponent } from './basic-home-about-summary.component';

describe('BasicHomeAboutSummaryComponent', () => {
  let component: BasicHomeAboutSummaryComponent;
  let fixture: ComponentFixture<BasicHomeAboutSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicHomeAboutSummaryComponent]
    });
    fixture = TestBed.createComponent(BasicHomeAboutSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
