import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PhoneNumberFormatPipe } from './phone-number-format.pipe';

@NgModule({
  declarations: [
    PhoneNumberFormatPipe
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    PhoneNumberFormatPipe
  ]
})
export class PhoneNumberFormatPipeModule { }
