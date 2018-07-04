
import { Pipe, PipeTransform } from '@angular/core';
import { AppConfigurationService } from '../../services/app-configuration.service';
import * as moment from 'moment';
@Pipe({ name: 'phoneNumberFormat' })
export class PhoneNumberFormatPipe implements PipeTransform {
  constructor(private _appConfig: AppConfigurationService) {

  }
  transform(value: string, args: string[]): any {
    if (!value) {
      return value;
    } else {
      const replaceValue = ('' + value).replace(/\D/g, '');
      const matchValue = replaceValue.match(/^(\d{3})(\d{3})(\d{4})$/);
      return (!matchValue) ? null : '(' + matchValue[1] + ') ' + matchValue[2] + '-' + matchValue[3];
    }
  }
}
