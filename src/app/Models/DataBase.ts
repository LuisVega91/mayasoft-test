import { instructorsSampleData } from '../factories/data';
import { IInstructor, Instructor } from './Instructor';

export class DataBase {
  private static instance: DataBase;
  public instructors: Instructor[] = [];

  private constructor() {}

  public static getInstance(): DataBase {
    if (!DataBase.instance) {
      DataBase.instance = new DataBase();
    }

    return DataBase.instance;
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
