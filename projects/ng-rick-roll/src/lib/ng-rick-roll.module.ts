import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgRickRollComponent } from './ng-rick-roll.component';



@NgModule({
  declarations: [NgRickRollComponent],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [NgRickRollComponent]
})
export class NgRickRollModule { }
