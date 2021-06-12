import { Instructor } from '../Models/Instructor';


const data = [1,2,3,4,5];
const instructorTemplate = {
  firstName: 'Luis',
  lastName: 'Vega',
  birthDay: new Date(),
  appointments: [],
};

export const instructorsSampleData: Instructor[] = data.map(el => new Instructor(instructorTemplate));
