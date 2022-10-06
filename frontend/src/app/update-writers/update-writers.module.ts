import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateWritersPageRoutingModule } from './update-writers-routing.module';

import { UpdateWritersPage } from './update-writers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateWritersPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateWritersPage]
})
export class UpdateWritersPageModule {}
