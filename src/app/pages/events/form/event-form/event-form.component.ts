import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit {
  @Input() event: Event;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    console.log(this.event);
  }

  dismiss(){
    this.modalController.dismiss();
  }

  //TODO: save instructors and events on localsetorage

  //TODO: build the form events
  //TODO: fix the CRUD events
  //TODO: fix factorys events
  //TODO: make function for validat no overload events that have the same type

}
