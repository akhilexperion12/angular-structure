import { Injectable } from '@angular/core';
@Injectable()
export class AppConfigurationService {

  /** BaseHttp service */
  public apiSuccessCodes: any[] = [200, 201];
  public apiErrorCodes: any[] = [404];

  /** Webstorage service */
  public storageKeyPrefix = 'cura_';
  public localStorage = true; // default is local storage for session storage use value as false
  /**General */
  public platform = 'portal';
  public dobDefaultMonth = '01/1990';
  public emailRegex = '/(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-])+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/';
  public defaultLanguage = 'en';
  public roleTypeDr = 'D';
  public roleTypePatient = 'P';
  public dateFormat = 'yyyy-mm-dd';
}
