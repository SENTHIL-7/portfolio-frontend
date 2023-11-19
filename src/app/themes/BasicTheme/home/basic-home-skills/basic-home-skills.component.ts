import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-home-skills',
  templateUrl: './basic-home-skills.component.html',
  styleUrls: ['./basic-home-skills.component.scss']
})
export class BasicHomeSkillsComponent {
  @Input() data: any;

  skills: any[] = [
    { name: 'ANGULAR', rating: "94" },
    { name: 'NODE', rating: "82" },
    { name: 'EXPRESS JS', rating: "80" },
    { name: 'MYSQL', rating: "91" },
    { name: 'FIGMA', rating: "93" },
    { name: 'HTML', rating: "95" },
    { name: 'CSS', rating: "94" },
    { name: 'JAVASCRIPT', rating: "94" },
    { name: 'JAVA', rating: "93" },
    { name: 'BOOTSTRAP', rating: "85" },

  ]
}
