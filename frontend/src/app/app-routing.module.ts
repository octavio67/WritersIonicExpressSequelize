import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'list-writers',
    loadChildren: () => import('./list-writers/list-writers.module').then( m => m.ListWritersPageModule)
  },
  {
    path: 'new-writers',
    loadChildren: () => import('./new-writers/new-writers.module').then( m => m.NewWritersPageModule)
  },
  {
    path: 'update-writers/:id',
    loadChildren: () => import('./update-writers/update-writers.module').then( m => m.UpdateWritersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
