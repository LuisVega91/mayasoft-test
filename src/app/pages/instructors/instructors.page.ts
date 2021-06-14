import { Component, OnInit } from '@angular/core';
import { InstructorsDB } from 'src/app/DataStructure/DB/InstructorsDB';
import { Instructor } from 'src/app/DataStructure/Models/Instructor';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.page.html',
  styleUrls: ['./instructors.page.scss'],
})
export class InstructorsPage implements OnInit {

  instructorsDB = InstructorsDB.getInstance();
  // instructors: Instructor[] = [];

  constructor() { }

  ngOnInit() {
    // this.instructors = this.instructorsDB.getInstructors();
  }

  handleClick(){
    this.instructorsDB.addInstructor(new Instructor({
      firstName: 'Emanuel',
      lastName: 'Martinez',
      birthDay: new Date('2018-09-21'),
    }));
  }

}
