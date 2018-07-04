import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { BroadcastService } from './broadcast.service';

@Injectable()
export class AuthGuard implements CanActivate {
  userData: any;
constructor(
  private router: Router,
  private _broadcastService: BroadcastService
) {
    this.userData = JSON.parse(localStorage.getItem('user_data'));
 }

canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | boolean {
    if (localStorage.getItem('token')) {
      const userData = JSON.parse(localStorage.getItem('user_data'));
      if (userData.group && userData.group[route.data[0].permissionKey] > 0 ) {
        return true;
      } else {
        this._broadcastService.broadcastAlert(
          'error', 'You don\'t have permission to access this feature'
        );
        this.router.navigate(['/home']);
        return false;
      }
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
