import { Time } from '@angular/common';
import { uid } from 'uid';

export type EventType = 'theorical' | 'seminar' | 'project';

export const EVENTS_TYPES = ['theorical' , 'seminar' , 'project'];
export interface IEvent {
  type?: EventType;
  date?: Date;
  start?: Time;
  end?: Time;
  description?: string;
  instructorId: string;
}

export class Event implements IEvent {
  id: string = uid();
  type: EventType;
  date: Date;
  start: Time;
  end: Time;
  description: string;
  instructorId: string;

  constructor(event: IEvent) {
    this.type = event.type;
    this.date = event.date;
    this.start = event.start;
    this.end = event.end;
    this.description = event.description;
    this.instructorId = event.instructorId;
  }

}
