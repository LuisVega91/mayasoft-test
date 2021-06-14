import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import { TimePipe } from 'src/app/shared/pipes/time.pipe';
import { EventFormComponent } from './form/event-form/event-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
  ],
  declarations: [
    EventsPage,
    TimePipe,
    EventFormComponent
  ]
})
export class EventsPageModule {}
