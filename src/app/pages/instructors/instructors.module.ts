import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstructorsPageRoutingModule } from './instructors-routing.module';

import { InstructorsPage } from './instructors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstructorsPageRoutingModule
  ],
  declarations: [InstructorsPage]
})
export class InstructorsPageModule {}
