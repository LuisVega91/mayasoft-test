import { InstructorsDB } from '../DB/InstructorsDB';
import { IEvent, Event, EventType } from '../Models/Event';
import { IInstructor, Instructor } from '../Models/Instructor';

const seed = [1, 2, 3, 4, 5];

const eventBuilder = (type: EventType, instructor: Instructor): IEvent => ({
  date: new Date(),
  description: `${type} by ${instructor.fullName}`,
  start: {
    hours: 2,
    minutes: 3,
  },
  end: {
    hours: 2,
    minutes: 3,
  },
  type,
  instructorId: instructor.id,
});

const instructors = InstructorsDB.getInstance().getInstructors();

export let eventsSampleData: Event[] = [];

instructors.forEach(instructor => {
  eventsSampleData = eventsSampleData.concat(seed.map((el) => new Event(eventBuilder('seminar', instructor))));
});


