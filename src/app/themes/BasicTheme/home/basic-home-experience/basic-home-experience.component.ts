import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-home-experience',
  templateUrl: './basic-home-experience.component.html',
  styleUrls: ['./basic-home-experience.component.scss']
})
export class BasicHomeExperienceComponent {
  @Input() data: any;
  events = [
    { date: '2023 - Present', roleOrEduction: "Software Engineer", companyOrInstituteName: "Centizen, Inc" },
    { date: '2019 - 2023', roleOrEduction: "Bachelor Degree of Engineering", companyOrInstituteName: "VV Cologe of Engineering" },

  ];
}
