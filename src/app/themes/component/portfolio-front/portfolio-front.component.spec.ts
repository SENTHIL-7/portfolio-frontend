import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFrontComponent } from './portfolio-front.component';

describe('PortfolioFrontComponent', () => {
  let component: PortfolioFrontComponent;
  let fixture: ComponentFixture<PortfolioFrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioFrontComponent]
    });
    fixture = TestBed.createComponent(PortfolioFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
