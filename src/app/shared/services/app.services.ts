import { Injectable } from '@angular/core';
import { WebStorageService } from './web-storage.service';

declare var _: any;
@Injectable()
export class AppService {

    /** Constructor function */
    constructor(private _webStorageService: WebStorageService) {
    };

    /**function for retrieving master data object */
    public getObjectById(objectList, id): object {
        const selectedObject = _.find(objectList, { 'id': id });
        if (selectedObject) {
            return selectedObject;
        } else {
            return null
        }
    }
    /**For saving the user data */
    public onLogin(loginData: any): void {
        this._webStorageService.saveData('user', loginData.userData);
        this._webStorageService.saveData('masterData', loginData.masterData);

    }
    /**For remove the user data */
    public onLogOut(): void {
        this._webStorageService.removeData('user');
        this._webStorageService.removeData('masterData');
    }

}
