import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { EventsDB } from 'src/app/DataStructure/DB/EventsDB';
import { Event, EVENTS_TYPES } from 'src/app/DataStructure/Models/Event';
import { CustomValidations } from 'src/app/shared/validators/custom-validation';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit {
  @Input() event: Event;

  eventsDB = EventsDB.getInstance();

  eventTypes = EVENTS_TYPES;
  formulario: FormGroup;
  constructor(
    private modalController: ModalController,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.buildFrom();
  }

  buildFrom() {
    this.formulario = this.fb.group(
      {
        type: [this.event.type, Validators.required],
        date: [this.event.dateToString, Validators.required],
        start: [this.event.start.toString, Validators.required],
        end: [this.event.end.toString, Validators.required],
        description: [this.event.description, Validators.required],
        instructorId: [this.event.instructorId, Validators.required],
        id: [this.event.id, Validators.required],
      },
      {
        validators: [
          CustomValidations.endLessThanStart('start', 'end'),
          CustomValidations.overloadEvents('id','start','end','type', 'date', this.event.instructorId),
        ],
      }
    );
  }

  dismiss() {
    this.modalController.dismiss();
  }

  save() {
    this.modalController.dismiss(this.formulario.value);
  }

  parseDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  //TODO: fix factorys events
}
