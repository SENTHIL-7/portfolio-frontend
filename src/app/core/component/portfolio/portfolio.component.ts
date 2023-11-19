import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicComponentDirective } from 'src/app/shared/directive/dynamic-component.directive';
import { DynamicComponent } from 'src/app/shared/model/dynamic-component';
import { DynamicComponentDataType } from 'src/app/shared/model/dynamicComponentType';
import { DynamicComponentService } from 'src/app/shared/service/dynamic-component.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  DynamicComponentList: DynamicComponentDataType[] = [];
  @ViewChild(DynamicComponentDirective, { static: true }) templateRef!: DynamicComponentDirective;
  constructor(private route: ActivatedRoute,
    private router: Router, private dynamicservice: DynamicComponentService) { }
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
    // this.dynamicComponentDirective.dynamicComponent = PageNotFoundComponent;
    this.DynamicComponentList = this.dynamicservice.getComponent();
    console.log("DynamicComponentList", this.DynamicComponentList);
    const viewContainerRef = this.templateRef.viewContainerRef;
    // viewContainerRef.clear();
    this.DynamicComponentList.forEach((x: any) => {
      const componentRef = viewContainerRef.createComponent<DynamicComponent>(
        x.component
      );
      componentRef.instance.data = x.data;
    });
  }



}
