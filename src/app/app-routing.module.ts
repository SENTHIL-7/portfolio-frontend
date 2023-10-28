import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './core/component/portfolio/portfolio.component';
import { PortfolioFrontComponent } from './themes/component/portfolio-front/portfolio-front.component';

const routes: Routes = [
  {
    path: 'portfolio', component: PortfolioComponent, children: [
      { path: '', component: PortfolioComponent },
      { path: ':data', component: PortfolioComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
