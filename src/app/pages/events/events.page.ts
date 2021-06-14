import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonList, ModalController } from '@ionic/angular';
import { EventsDB } from 'src/app/DataStructure/DB/EventsDB';
import { InstructorsDB } from 'src/app/DataStructure/DB/InstructorsDB';
import { Event } from 'src/app/DataStructure/Models/Event';
import { EventFormComponent } from './form/event-form/event-form.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  @ViewChild('eventList') eventList: IonList;

  eventsDB = EventsDB.getInstance();
  instructorId: string = null;
  currentDate = new Date();

  constructor(
    private route: ActivatedRoute,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.instructorId = this.route.snapshot.paramMap.get('instructorId');
    console.log(this.eventsDB.getEvents(this.instructorId));
    this.eventsDB.getEvents(this.instructorId);
  }

  addEvent() {
    this.eventsDB.addEvent(
      new Event({
        type: 'theorical',
        date: new Date(),
        start: {
          hours: 12,
          minutes: 2,
        },
        end: {
          hours: 12,
          minutes: 2,
        },
        description: '2143',
        instructorId: this.instructorId,
      })
    );
    this.eventList.closeSlidingItems();
  }

  deleteEvent(event: Event) {
    this.eventsDB.removeEvent(event);
    this.eventList.closeSlidingItems();
  }

  editEvent() {
    this.showForm();
    this.eventList.closeSlidingItems();
  }

  async showForm(event: Event = new Event({instructorId:this.instructorId})){
    const modal = await this.modalController.create({
      component: EventFormComponent,
      backdropDismiss: false,
      componentProps:{
        event,
      }
    });
    await modal.present();
    this.eventList.closeSlidingItems();
  }
}
