import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioFrontComponent } from './component/portfolio-front/portfolio-front.component';



@NgModule({
  declarations: [
    PortfolioFrontComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PortfolioFrontComponent
  ]
})
export class ThemesModule { }
