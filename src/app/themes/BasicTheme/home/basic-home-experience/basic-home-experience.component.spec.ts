import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHomeExperienceComponent } from './basic-home-experience.component';

describe('BasicHomeExperienceComponent', () => {
  let component: BasicHomeExperienceComponent;
  let fixture: ComponentFixture<BasicHomeExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicHomeExperienceComponent]
    });
    fixture = TestBed.createComponent(BasicHomeExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
