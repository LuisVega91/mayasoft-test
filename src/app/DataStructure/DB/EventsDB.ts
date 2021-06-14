import { eventsSampleData } from '../Factories/EventsFactory';
import { Event } from '../Models/Event';

export class EventsDB {
  private static instance: EventsDB;
  public events: Event[] = [];
  public eventsByInstructor: Event[] = [];

  private constructor() {}

  public static getInstance(): EventsDB {
    if (!EventsDB.instance) {
      EventsDB.instance = new EventsDB();
    }

    return EventsDB.instance;
  }

  public getEvents(instructorId?: string): Event[] {
    if (this.events.length === 0) {
      this.events = eventsSampleData;
    }

    if (instructorId) {
      this.updateEventsByInstructor(instructorId);
    }

    return this.events;
  }

  public addEvent(event: Event): void {
    this.events = this.events.concat(event);
    this.updateEventsByInstructor(event.instructorId);
  }

  public removeEvent(event: Event): void {
    this.events = this.events.filter((e) => e.id !== event.id);
    this.updateEventsByInstructor(event.instructorId);
  }

  public setEvent(event: Event): void {
    this.removeEvent(event);
    this.addEvent(event);
    this.updateEventsByInstructor(event.instructorId);
  }

  private updateEventsByInstructor(instructorId: string) {
    this.eventsByInstructor = this.events.filter(
      (el) => el.instructorId === instructorId
    );
  }
}
