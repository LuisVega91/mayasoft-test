import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit {
  @Input() event: Event;

  constructor() {}

  ngOnInit() {
    console.log(this.event);
  }
}
