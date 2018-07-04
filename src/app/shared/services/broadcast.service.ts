import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class BroadcastService {
  private alertText = new Subject<any>();
  alertSource = this.alertText.asObservable();

  private loader = new Subject<any>();
  loaderSource = this.loader.asObservable();

  private logout = new Subject<any>();
  logoutSource = this.logout.asObservable();

  private successlogin = new Subject<any>();
  successLoginSource = this.successlogin.asObservable();

  /*** ALERT */

  broadcastAlert(alertType: any, alertData: any) {
    this.alertText.next({ alertType, alertData });
  }

  /*** /LAODER */
  broadcastLoader(showLoader: boolean, message?: string) {
    const messageContent: any = {
      showLoader: showLoader
    }
    if (message) {
      messageContent.message = message
    }
    this.loader.next(messageContent);
  }
  /*** LOGOUT */

  broadcastLogout(showLogout: boolean) {
    this.logout.next(showLogout);
  }
  /*** SUCCESS lOGIN */

  broadcastSuccessLogin(isSuccess: boolean) {
    this.successlogin.next(isSuccess);
  }
}

