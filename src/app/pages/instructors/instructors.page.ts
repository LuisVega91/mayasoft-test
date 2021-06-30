import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, ModalController } from '@ionic/angular';
import { InstructorsDB } from 'src/app/DataStructure/DB/InstructorsDB';
import {
  IInstructor,
  Instructor,
} from 'src/app/DataStructure/Models/Instructor';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.page.html',
  styleUrls: ['./instructors.page.scss'],
})
export class InstructorsPage implements OnInit {
  @ViewChild('instructorList') instructorList: IonList;

  instructorsDB = InstructorsDB.getInstance();
  // instructors: Instructor[] = [];

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    // this.instructors = this.instructorsDB.getInstructors();
  }

  handleClick() {
    this.instructorsDB.addInstructor(
      new Instructor({
        firstName: 'Emanuel',
        lastName: 'Martinez',
        birthDay: new Date('2018-09-21'),
      })
    );
  }

  deleteInstructor(instructor) {
    this.instructorsDB.removeInstructor(instructor.id);
  }

  addInstructor() {
    this.instructorList.closeSlidingItems();
    this.showForm('addInstructor');
  }

  editInstructors(instructor: Instructor) {
    this.instructorList.closeSlidingItems();
    this.showForm('setInstructor', instructor);
  }

  async showForm(
    dbAction: 'setInstructor' | 'addInstructor',
    instructor: Instructor = new Instructor()
  ) {
    const modal = await this.modalController.create({
      component: FormComponent,
      backdropDismiss: false,
      componentProps: {
        instructor,
      },
    });
    await modal.present();

    let instructorEdited: Instructor = (await modal.onDidDismiss()).data;

    if (!instructorEdited) {
      return null;
    }

    instructorEdited = new Instructor(instructorEdited);

    if (dbAction === 'addInstructor') {
      this.instructorsDB.addInstructor(instructorEdited);
    }
    if (dbAction === 'setInstructor') {
      this.instructorsDB.setInstructor(instructorEdited);
    }
  }
}
