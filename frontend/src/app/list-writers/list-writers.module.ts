import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListWritersPageRoutingModule } from './list-writers-routing.module';

import { ListWritersPage } from './list-writers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ListWritersPageRoutingModule,
  ],
  declarations: [ListWritersPage]
})
export class ListWritersPageModule {}
