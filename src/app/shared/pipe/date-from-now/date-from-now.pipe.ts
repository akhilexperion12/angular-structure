
import { Pipe, PipeTransform } from '@angular/core';
import { AppConfigurationService } from '../../services/app-configuration.service';
import * as moment from 'moment';
@Pipe({ name: 'dateFromNow' })
export class DateFromNowPipe implements PipeTransform {
  constructor(private _appConfig: AppConfigurationService) {

  }
  transform(value: string, args: string[]): any {
    if (!value) {
      return value;
    } else {
      const returnDate = moment(value, 'x').fromNow();
      return returnDate;
    }
  }
}
