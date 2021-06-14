
import { uid } from 'uid';
import { Time } from './Time';

export type EventType = 'theorical' | 'seminar' | 'project';

export const EVENTS_TYPES = ['theorical', 'seminar', 'project'];


export interface IEvent {
  type?: EventType;
  date?: Date;
  start?: Time;
  end?: Time;
  description?: string;
  instructorId: string;
  id?: string;
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
    this.date = new Date(event.date);
    this.start = new Time(event.start);
    this.end = new Time(event.end);
    this.description = event.description;
    this.instructorId = event.instructorId;
    if (event.id) {
      this.id = event.id;
    }
  }
}
