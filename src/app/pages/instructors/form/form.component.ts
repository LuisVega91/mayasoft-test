import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { InstructorsDB } from 'src/app/DataStructure/DB/InstructorsDB';
import { Instructor} from 'src/app/DataStructure/Models/Instructor';
import { CustomValidations } from 'src/app/shared/validators/custom-validation';

@Component({
  selector: 'app-instructor-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() instructor: Instructor;

  instructorsDB = InstructorsDB.getInstance();

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
        firstName: [this.instructor.firstName, Validators.required],
        lastName: [this.instructor.lastName, Validators.required],
        birthDay: [this.instructor.birthDay, Validators.required],
        id: [this.instructor.id, Validators.required],
      }
    );
  }

  dismiss() {
    this.modalController.dismiss();
  }

  save() {
    this.modalController.dismiss(this.formulario.value);
  }

}
