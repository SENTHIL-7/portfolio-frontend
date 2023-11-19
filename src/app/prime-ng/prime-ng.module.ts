import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    TimelineModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    TimelineModule
  ]
})
export class PrimeNgModule { }
