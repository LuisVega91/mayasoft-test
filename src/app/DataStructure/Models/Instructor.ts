
export interface IInstructor {
  firstName: string;
  lastName: string;
  birthDay: Date;
}

export class Instructor implements IInstructor{
  id: number = Date.now();
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
