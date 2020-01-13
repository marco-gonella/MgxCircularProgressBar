import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MgxCircularProgressModule } from 'projects/mgx-circular-progress-bar/src/public_api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MgxCircularProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
