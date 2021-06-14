import { Component, OnInit } from '@angular/core';
import { EventsDB } from 'src/app/DataStructure/DB/eventsDB';
import { Event } from 'src/app/DataStructure/Models/Event';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  eventsDB = EventsDB.getInstance();
  events: Event[] = [];

  constructor() {}

  ngOnInit() {
    this.events = this.eventsDB.getEvents();
  }

  handleClick() {
    this.eventsDB.addEvent(
      new Event({
        type: 'theorical',
        date: new Date(),
        start: {
          hours: 12,
          minutes: 2
        },
        end: {
          hours: 12,
          minutes: 2
        },
        description: '2143',
      })
    );
  }
}
