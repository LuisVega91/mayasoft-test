
import { Pipe, PipeTransform } from '@angular/core';
import { Time } from 'src/app/DataStructure/Models/Time';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(time: Time): string {
    return `${time.hours<10?'0':''}${time.hours}:${time.minutes<10?'0':''}${time.minutes}`;
  }

}
