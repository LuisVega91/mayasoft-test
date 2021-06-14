import { IEvent, Event, EventType } from '../Models/Event';

const data = [1, 2, 3, 4, 5];

const eventBuilder = (id: number): IEvent => ({
  date: new Date(id),
  description: 'sdfsdf',
  start: {
    hours: 2,
    minutes: 3,
  },
  end: {
    hours: 2,
    minutes: 3,
  },
  type: 'theorical',
});

export const eventsSampleData: Event[] = data.map(
  (el) => new Event(eventBuilder(el))
);
