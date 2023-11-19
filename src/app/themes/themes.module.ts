import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioFrontComponent } from './component/portfolio-front/portfolio-front.component';
import { BasicHomeBannerComponent } from './BasicTheme/home/basic-home-banner/basic-home-banner.component';
import { BasicHomeSkillsComponent } from './BasicTheme/home/basic-home-skills/basic-home-skills.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BasicHomeAboutSummaryComponent } from './BasicTheme/home/basic-home-about-summary/basic-home-about-summary.component';
import { BasicHomeExperienceComponent } from './BasicTheme/home/basic-home-experience/basic-home-experience.component';



@NgModule({
  declarations: [
    PortfolioFrontComponent,
    BasicHomeBannerComponent,
    BasicHomeSkillsComponent,
    BasicHomeAboutSummaryComponent,
    BasicHomeExperienceComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    PortfolioFrontComponent
  ]
})
export class ThemesModule { }
