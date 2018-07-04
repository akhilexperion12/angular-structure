import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule} from 'angular2-toaster/angular2-toaster';
import { NotificationsComponent } from './notifications.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ToasterModule,
  ],
  declarations: [
    NotificationsComponent
  ],
  exports: [NotificationsComponent]
})
export class NotificationsModule { }
