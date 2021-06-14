import { uid } from 'uid';

export interface IInstructor {
  firstName: string;
  lastName: string;
  birthDay: Date;
  id?: string;
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
    if(instructor.id){
      this.id = instructor.id;
    }
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
