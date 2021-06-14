import { instructorsSampleData } from '../Factories/Instructors';
import { IInstructor, Instructor } from '../Models/Instructor';

export class InstructorsDB {
  private static instance: InstructorsDB;
  public instructors: Instructor[] = [];

  private constructor() {}

  public static getInstance(): InstructorsDB {
    if (!InstructorsDB.instance) {
      InstructorsDB.instance = new InstructorsDB();
    }

    return InstructorsDB.instance;
  }

  public getInstructors(): Instructor[] {
    if (this.instructors.length === 0) {
      this.instructors = instructorsSampleData;
    }
    return this.instructors;
  }

  public addInstructor(instructor: Instructor): void {
    this.instructors = this.instructors.concat(instructor);
  }

  public removeInstructor(id: number): void {
    this.instructors = this.instructors.filter((i) => i.id !== id);
  }

  public setInstructor(instructor: Instructor): void {
    this.removeInstructor(instructor.id);
    this.addInstructor(instructor);
  }
}
