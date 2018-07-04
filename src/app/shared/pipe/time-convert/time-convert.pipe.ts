import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'timeConvertMinuteToHours'
})
export class TimeConvertPipe implements PipeTransform {
    public times: any;
    public time_string: any;
    public plural: any;
    public seconds: any;
    transform(mins) {
        this.seconds = Math.abs(mins) * 60;
        this.times = {
            year: 31557600,
            month: 2629746,
            day: 86400,
            hour: 3600,
            minute: 60,
            second: 1
        };
        this.time_string = '';
        this.plural = '';
        for (const key in this.times) {
            if (Math.floor(this.seconds / this.times[key]) > 0) {
                if (Math.floor(this.seconds / this.times[key]) > 1) {
                    this.plural = 's';
                } else {
                    this.plural = '';
                }

                this.time_string += Math.floor(this.seconds / this.times[key]).toString() + ' ' + key.toString() + this.plural + ' ';
                this.seconds = this.seconds - this.times[key] * Math.floor(this.seconds / this.times[key]);

            }
        }
        return this.time_string;

    }

}
