import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonList, ModalController } from '@ionic/angular';
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
    private modalController: ModalController,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.instructorId = this.route.snapshot.paramMap.get('instructorId');
    if (InstructorsDB.getInstance().instructorExist(this.instructorId)) {
      this.eventsDB.getEvents(this.instructorId);
    } else {
      this.presentAlert();
    }
  }

  addEvent() {
    this.eventList.closeSlidingItems();
    this.showForm('addEvent');
  }

  deleteEvent(event: Event) {
    this.eventsDB.removeEvent(event);
    this.eventList.closeSlidingItems();
  }

  editEvent(event: Event) {
    this.eventList.closeSlidingItems();
    this.showForm('setEvent', event);
  }

  async showForm(
    dbAction: 'setEvent' | 'addEvent',
    event: Event = new Event({ instructorId: this.instructorId })
  ) {
    const modal = await this.modalController.create({
      component: EventFormComponent,
      backdropDismiss: false,
      componentProps: {
        event,
      },
    });
    await modal.present();

    let eventEdited: Event = (await modal.onDidDismiss()).data;

    if (!eventEdited) {
      return null;
    }

    eventEdited = new Event(eventEdited);

    if (dbAction === 'addEvent') {
      this.eventsDB.addEvent(eventEdited);
    }
    if (dbAction === 'setEvent') {
      this.eventsDB.setEvent(eventEdited);
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: `the instructor with id: ${this.instructorId} don't exist, you will be redirect to instructors Page`,
      buttons: ['OK'],
      backdropDismiss: false,
    });

    await alert.present();

    await alert.onDidDismiss();

    this.router.navigateByUrl('instructors');
  }
}
