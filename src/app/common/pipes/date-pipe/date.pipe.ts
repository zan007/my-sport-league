import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

type dateFormats = 'long' | 'short';

@Pipe({
    name: 'mslDate',
})
export class DatePipe implements PipeTransform {
    transform(value: string, format: dateFormats): string {
        if (format === 'short') {
            return moment(value).format('MMM DD');
        }

        return moment(value).format('YYYY.MM.DD');
    }
}
