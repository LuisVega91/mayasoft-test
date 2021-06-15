import { FormGroup } from '@angular/forms';
import { EventsDB } from 'src/app/DataStructure/DB/EventsDB';
import { IEvent } from 'src/app/DataStructure/Models/Event';

export class CustomValidations {
  static endLessThanStart(start: string, end: string) {
    return (formGroup: FormGroup) => {
      const endControl = formGroup.controls[end];
      const startControl = formGroup.controls[start];

      if (startControl.value < endControl.value) {
        endControl.setErrors(null);
      } else if (startControl.value > endControl.value) {
        endControl.setErrors({ isGreaterThanStart: true });
      } else {
        endControl.setErrors({ isEqualThanStart: true });
      }
    };
  }

  static overloadEvents(
    id: string,
    start: string,
    end: string,
    type: string,
    date: string,
    instructorId: string,
  ) {
    return (formGroup: FormGroup) => {
      const endControl = formGroup.controls[end];
      const startControl = formGroup.controls[start];
      const typeControl = formGroup.controls[type];
      const dateControl = formGroup.controls[date];
      const idControl = formGroup.controls[id];

      const eventsDB = EventsDB.getInstance();

      const event: IEvent = {
        end: endControl.value,
        start: startControl.value,
        type: typeControl.value,
        date: dateControl.value,
        id: idControl.value,
        instructorId,
      };

      const overloads = eventsDB.getOverloadsEvents(event);
      console.log(overloads);
      if (overloads.length === 0) {
        startControl.setErrors(null);
      } else {
        startControl.setErrors({ hasOverloadEvents: true });
      }
    };
  }
}
