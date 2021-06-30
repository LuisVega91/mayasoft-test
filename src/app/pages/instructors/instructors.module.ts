import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstructorsPageRoutingModule } from './instructors-routing.module';

import { InstructorsPage } from './instructors.page';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InstructorsPageRoutingModule
  ],
  declarations: [InstructorsPage, FormComponent]
})
export class InstructorsPageModule {}
