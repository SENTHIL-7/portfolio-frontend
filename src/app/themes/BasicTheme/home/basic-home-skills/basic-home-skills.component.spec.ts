import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHomeSkillsComponent } from './basic-home-skills.component';

describe('BasicHomeSkillsComponent', () => {
  let component: BasicHomeSkillsComponent;
  let fixture: ComponentFixture<BasicHomeSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicHomeSkillsComponent]
    });
    fixture = TestBed.createComponent(BasicHomeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
