import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateWritersPage } from './update-writers.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateWritersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateWritersPageRoutingModule {}
