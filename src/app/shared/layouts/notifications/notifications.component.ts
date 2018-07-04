import { Component, OnInit } from '@angular/core';
import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { BroadcastService } from '../../services/broadcast.service';
@Component({
  selector: 'notification',
  templateUrl: 'notifications.component.html'
})
export class NotificationsComponent implements OnInit {

  public toasterconfig: ToasterConfig =
  new ToasterConfig({
    tapToDismiss: true,
    timeout: 5000
  });

  /**Constructor finction of service */
  constructor(private _toasterService: ToasterService, private _broadcastService: BroadcastService) {
    this._broadcastService.alertSource.subscribe((data) => {
      switch (data.alertType) {
        case 'success':
          this._showSuccess(data.alertData);
          break;
        case 'error':
          this._showError(data.alertData);
          break;
        case 'warning':
          this._showWarning(data.alertData);
          break;
        case 'info':
          this._showInfo(data.alertData);
          break;
        case 'primary':
          this._showPrimary(data.alertData);
          break;
        default:
          break;
      }

    });
  }
  ngOnInit() {


  }

  /** For showing the success message */
  private _showSuccess(message: string) {
    this._toasterService.pop('success', 'Success ', message);
  }
  /** For showing the Error message */
  private _showError(message: string) {
    this._toasterService.pop('error', 'Error', message);
  }
  /** For showing the Warning message */
  private _showWarning(message: string) {
    this._toasterService.pop('warning', 'Warning', message);
  }
  /** For showing the Info message */
  private _showInfo(message: string) {
    this._toasterService.pop('info', 'Info ', message);
  }
  /** For showing the primary message */
  private _showPrimary(message: string) {
    this._toasterService.pop('primary', 'Info ', message);
  }

}
