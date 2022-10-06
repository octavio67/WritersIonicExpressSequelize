import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewWritersPage } from './new-writers.page';

const routes: Routes = [
  {
    path: '',
    component: NewWritersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewWritersPageRoutingModule {}
