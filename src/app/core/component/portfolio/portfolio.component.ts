import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private router: Router) { }
  paramData = {
    data: ''
  };
  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      console.log("res", res);

      if (res && res.data) {
        this.paramData = {
          data: res.data
        }
      };

    })
    console.log("param", this.paramData);
    console.log("data", this.paramData.data);
  }



}
