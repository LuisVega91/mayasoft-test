import { uid } from 'uid';

export interface IInstructor {
  firstName: string;
  lastName: string;
  birthDay: Date;
}

export class Instructor implements IInstructor{
  id: string = uid();
  firstName: string;
  lastName: string;
  birthDay: Date;

  constructor(instructor: IInstructor){
    this.firstName = instructor.firstName;
    this.lastName = instructor.lastName;
    this.birthDay = instructor.birthDay;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
