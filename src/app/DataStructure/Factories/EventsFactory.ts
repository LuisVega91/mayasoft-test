import { InstructorsDB } from '../DB/InstructorsDB';
import { IEvent, Event, EventType, EVENTS_TYPES } from '../Models/Event';
import { Instructor } from '../Models/Instructor';
import { Time } from '../Models/Time';

const eventTypeIndex: number[] = [0, 1, 2];
const dates = [1, 8, 16, 2, 9, 17, 3, 10, 18, 4, 11, 19, 5, 12, 20];

const eventBuilder = (
  type: EventType,
  instructor: Instructor,
  date: Date
): IEvent => ({
  date,
  description: `${type} by ${instructor.fullName}`,
  start: new Time({
    hours: 8,
    minutes: 0,
  }),
  end: new Time({
    hours: 12,
    minutes: 0,
  }),
  type,
  instructorId: instructor.id,
});

const instructors = InstructorsDB.getInstance().getInstructors();

export let eventsSampleData: Event[] = [];

let indexDate = 0;
instructors.forEach((instructor) => {
  eventsSampleData = eventsSampleData.concat(
    eventTypeIndex.map((el) => {
      const response = new Event(
        eventBuilder(
          EVENTS_TYPES[el],
          instructor,
          new Date(
            `${new Date().getFullYear()}-${new Date().getMonth()}-${
              dates[indexDate]
            }`
          )
        )
      );
      indexDate++;
      return response;
    })
  );
});
