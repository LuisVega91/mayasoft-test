import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import { TimePipe } from 'src/app/shared/pipes/time.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule
  ],
  declarations: [EventsPage, TimePipe]
})
export class EventsPageModule {}
