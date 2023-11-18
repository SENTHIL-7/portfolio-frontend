import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-home-skills',
  templateUrl: './basic-home-skills.component.html',
  styleUrls: ['./basic-home-skills.component.scss']
})
export class BasicHomeSkillsComponent {
  @Input() data: any;
}
