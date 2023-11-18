import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-home-banner',
  templateUrl: './basic-home-banner.component.html',
  styleUrls: ['./basic-home-banner.component.scss']
})
export class BasicHomeBannerComponent {
  @Input() data: any;
}
