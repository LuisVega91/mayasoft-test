import { IInstructor, Instructor } from '../Models/Instructor';

const data = [1, 2, 3, 4, 5];


const instructorBuilder = (id: number): IInstructor => ({
  firstName: 'Luis',
  lastName: 'Vega ' + id,
  birthDay: new Date(`1991-06-${id}`),
});


export const instructorsSampleData: Instructor[] = data.map(
  (el) => new Instructor(instructorBuilder(el))
);

