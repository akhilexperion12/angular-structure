import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TimeConvertPipe } from './time-convert.pipe';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule
    ],
    declarations: [TimeConvertPipe],
    exports: [TimeConvertPipe]
})
export class TimeConvertModule {
    constructor() { }
}
