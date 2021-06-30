import { eventsSampleData } from '../Factories/EventsFactory';
import { Event, EventType, IEvent } from '../Models/Event';

export class EventsDB {
  private static instance: EventsDB;
  public events: Event[] = [];
  public eventsByInstructor: Event[] = [];
  public overloadsEvents: Event[] = [];

  private constructor() {}

  public static getInstance(): EventsDB {
    if (!EventsDB.instance) {
      EventsDB.instance = new EventsDB();
    }
    return EventsDB.instance;
  }

  public getEvents(instructorId?: string): Event[] {
    if (this.events.length === 0) {
      this.events = this.getFromLocalStorage() || eventsSampleData;
      this.saveToLocalStorage();
    }

    if (instructorId) {
      this.updateEventsByInstructor(instructorId);
    }

    return this.events;
  }

  public addEvent(event: Event): void {
    this.events = this.events.concat(event);
    this.updateEventsByInstructor(event.instructorId);
    this.saveToLocalStorage();
  }

  public removeEvent(event: Event): void {
    this.events = this.events.filter((e) => e.id !== event.id);
    this.updateEventsByInstructor(event.instructorId);
    this.saveToLocalStorage();
  }

  public setEvent(event: Event): void {
    this.removeEvent(event);
    this.addEvent(event);
    this.updateEventsByInstructor(event.instructorId);
  }

  public getOverloadsEvents(event: IEvent): Event[] {
    const eventModel: Event = new Event(event);
    console.log(eventModel);
    this.overloadsEvents = this.events
      .filter((el)=> el.id !== eventModel.id )
      .filter((el) => el.type === eventModel.type)
      .filter((el) => el.dateToString === eventModel.dateToString)
      .filter((el) =>
          !((
            eventModel.start.toMinutes < el.start.toMinutes &&
            eventModel.end.toMinutes < el.start.toMinutes
          ) || (
            eventModel.start.toMinutes > el.end.toMinutes &&
            eventModel.end.toMinutes > el.end.toMinutes
          ))
      );
    return this.overloadsEvents;
  }

  private updateEventsByInstructor(instructorId: string) {
    this.eventsByInstructor = this.events.filter(
      (el) => el.instructorId === instructorId
    );
  }

  private getFromLocalStorage(): Event[] {
    const events = localStorage.getItem('events');
    if (events) {
      return JSON.parse(events).map((e) => new Event(e));
    }
    return null;
  }

  private saveToLocalStorage() {
    localStorage.setItem('events', JSON.stringify(this.events));
  }
}


