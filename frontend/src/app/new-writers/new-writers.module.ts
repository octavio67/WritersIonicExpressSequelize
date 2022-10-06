import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewWritersPageRoutingModule } from './new-writers-routing.module';

import { NewWritersPage } from './new-writers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewWritersPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewWritersPage]
})
export class NewWritersPageModule {}
