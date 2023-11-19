import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-home-about-summary',
  templateUrl: './basic-home-about-summary.component.html',
  styleUrls: ['./basic-home-about-summary.component.scss']
})
export class BasicHomeAboutSummaryComponent {
  @Input() data: any;
}
