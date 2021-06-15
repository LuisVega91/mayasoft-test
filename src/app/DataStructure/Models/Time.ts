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
      this.hours = time?.hours || 0;
      this.minutes = time?.minutes || 0;
    }
  }

  get toString(): string {
    return `${this.hours < 10 ? '0' : ''}${this.hours || 0}:${
      this.minutes < 10 ? '0' : ''
    }${this.minutes || 0}`;
  }

  get toMinutes(): number{
    return (this.hours * 60) + this.minutes;
  }
}
