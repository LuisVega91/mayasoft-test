import { Time } from '@angular/common';

export type EventType = 'theorical' | 'seminar' | 'project';

export interface IEvent {
  type: EventType;
  date: Date;
  start: Time;
  end: Time;
  description: string;
  instructorId: number;
}

export class Event implements IEvent {
  id: number = Date.now();
  type: EventType;
  date: Date;
  start: Time;
  end: Time;
  description: string;
  instructorId: number;

  constructor(event: IEvent) {
    this.type = event.type;
    this.date = event.date;
    this.start = event.start;
    this.end = event.end;
    this.description = event.description;
  }
}
