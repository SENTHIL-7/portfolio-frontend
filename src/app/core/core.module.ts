import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { SharedModule } from '../shared/shared.module';
import { ThemesModule } from '../themes/themes.module';
import { RouterModule } from '@angular/router';
import { PortfolioFrontComponent } from '../themes/component/portfolio-front/portfolio-front.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    PortfolioComponent,
    PageNotFoundComponent,
  ],
  imports: [
    // RouterModule.forChild([
    //   { path: 'user', component: PortfolioFrontComponent }
    // ]),
    CommonModule,
    SharedModule,
    ThemesModule
  ],
  exports: [
    // DynamicComponentDirective
  ]
})
export class CoreModule { }
