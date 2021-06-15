import { Time as ITime } from '@angular/common';

export class Time implements ITime {
  hours: number;
  minutes: number;

  constructor(time: ITime | string) {
    if (typeof time === 'string') {
      const timeArray = time.split(':');
      this.hours = Number(timeArray[0]);
      this.minutes = Number(timeArray[1]);
    } else {
      this.hours = time.hours;
      this.minutes = time.minutes;
    }
  }

  get toString() {
    return `${this.hours<10?'0':''}${this.hours}:${this.minutes<10?'0':''}${this.minutes}`;
  }
}
