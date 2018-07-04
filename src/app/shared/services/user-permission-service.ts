import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { PermissionKeyService } from './permission-key.services';
import { WebStorageService } from '../../shared/services/web-storage.service';
import { AppConfigurationService } from '../../shared/services/app-configuration.service';


@Injectable()
export class UserPermission implements CanActivate {

  constructor(
    private _router: Router,
    private _permissionKey: PermissionKeyService,
    private _webStorageService: WebStorageService,
    private _appConfig: AppConfigurationService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | boolean {

    const userData = this._webStorageService.getData('user');
    const permissionKey = route.data[0]['permissionKey'];
    let permissionStatus = false;
    if (userData['data']) {
      if (userData['data'].user_type === this._appConfig.roleTypeDr) {
        permissionStatus = (this._permissionKey.userPermission.prosKey.indexOf(permissionKey) > -1);
        if (permissionStatus === true) {
          return true;
        }
      } else if (userData['data'].user_type === this._appConfig.roleTypePatient) {
        permissionStatus = (this._permissionKey.userPermission.clientsKey.indexOf(permissionKey) > -1);
        if (permissionStatus === true) {
          return true;
        }
      }
      this._router.navigate(['./index']);
      return false;
    }
  }
}
