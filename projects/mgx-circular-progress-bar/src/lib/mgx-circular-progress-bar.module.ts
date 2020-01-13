import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MgxCircularProgressFullBarModule } from './mgx-circular-progress-full-bar/mgx-circular-progress-full-bar.module';
import { MgxCircularProgressPieModule } from './mgx-circular-progress-pie/mgx-circular-progress-pie.module';
import { MgxCircularProgressBarModule } from './mgx-circular-progress-bar/mgx-circular-progress-bar.module';

@NgModule({
  imports: [
    CommonModule,
    MgxCircularProgressBarModule,
    MgxCircularProgressPieModule,
    MgxCircularProgressFullBarModule
  ],
  exports: [
    MgxCircularProgressBarModule,
    MgxCircularProgressPieModule,
    MgxCircularProgressFullBarModule
  ]
})
export class MgxCircularProgressModule { }
