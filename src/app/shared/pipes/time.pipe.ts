import { Time } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(time: Time): string {
    return `${time.hours<10?'0':''}${time.hours}:${time.minutes<10?'0':''}${time.minutes}`;
  }

}
