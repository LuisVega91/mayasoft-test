import { Time } from '@angular/common';

export enum EventType {
  theorical = 'theorical',
  seminar = 'seminar',
  project = 'project',
}

export interface IEvent {
  type: EventType;
  date: Date;
  start: Time;
  end: Time;
  description: string;
}

export class Event implements IEvent {
  type: EventType;
  date: Date;
  start: Time;
  end: Time;
  description: string;
}
