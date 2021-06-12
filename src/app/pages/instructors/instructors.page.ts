import { Component, OnInit } from '@angular/core';
import { DataBase } from 'src/app/Models/DataBase';
import { Instructor } from 'src/app/Models/Instructor';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.page.html',
  styleUrls: ['./instructors.page.scss'],
})
export class InstructorsPage implements OnInit {

  database = DataBase.getInstance();
  instructors: Instructor[] = [];

  constructor() { }

  ngOnInit() {
    this.instructors = this.database.getInstructors();
  }

  handleClick(){
    this.database.addInstructor(new Instructor({
      firstName: 'Emanuel',
      lastName: 'Martinez',
      birthDay: new Date('2018-09-21'),
      appointments: []
    }));
  }

}
