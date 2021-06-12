import { IEvent } from './Events';

export interface IInstructor {
  firstName: string;
  lastName: string;
  birthDay: Date;
  appointments: IEvent[];
}

export class Instructor implements IInstructor{
  id: number = Date.now();
  firstName: string;
  lastName: string;
  birthDay: Date;
  appointments: IEvent[];

  constructor(instructor: IInstructor){
    this.firstName = instructor.firstName;
    this.lastName = instructor.lastName;
    this.birthDay = instructor.birthDay;
    this.appointments = instructor.appointments;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
