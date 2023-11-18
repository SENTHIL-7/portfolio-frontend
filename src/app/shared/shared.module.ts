import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooderComponent } from './component/fooder/fooder.component';
import { DynamicComponentDirective } from './directive/dynamic-component.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    FooderComponent,
    DynamicComponentDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooderComponent,
    DynamicComponentDirective
  ]
})
export class SharedModule { }
