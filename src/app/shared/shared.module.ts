import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooderComponent } from './component/fooder/fooder.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
