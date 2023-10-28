import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// primeNG module
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './component/header/header.component';
import { FooderComponent } from './component/fooder/fooder.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooderComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    HeaderComponent,
    FooderComponent,
    ButtonModule
  ]
})
export class SharedModule { }
