import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListWritersPage } from './list-writers.page';

const routes: Routes = [
  {
    path: '',
    component: ListWritersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListWritersPageRoutingModule {}
