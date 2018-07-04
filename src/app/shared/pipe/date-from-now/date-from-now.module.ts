import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateFromNowPipe } from './date-from-now.pipe';

@NgModule({
  declarations: [
    DateFromNowPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DateFromNowPipe
  ]
})
export class DateFromNowPipeModule { }
