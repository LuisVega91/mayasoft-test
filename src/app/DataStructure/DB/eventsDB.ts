import { eventsSampleData } from '../Factories/Events';
import { IEvent, Event } from '../Models/Event';

export class EventsDB {
  private static instance: EventsDB;
  public events: Event[] = [];

  private constructor() {}

  public static getInstance(): EventsDB {
    if (!EventsDB.instance) {
      EventsDB.instance = new EventsDB();
    }

    return EventsDB.instance;
  }

  public getEvents(instructorId: number): Event[] {
    if (this.events.length === 0) {
      this.events = eventsSampleData;
    }
    console.log(this.events.filter(el => el.instructorId !== instructorId));
    return this.events.filter(el => el.instructorId !== instructorId);
  }

  public addEvent(event: Event): void {
    this.events = this.events.concat(event);
  }

  public removeEvent(id: number): void {
    this.events = this.events.filter((i) => i.id !== id);
  }

  public setEvent(event: Event): void {
    this.removeEvent(event.id);
    this.addEvent(event);
  }
}