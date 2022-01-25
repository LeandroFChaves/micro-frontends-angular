import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { endsWith } from './router.utils';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home', },

  {
    matcher: endsWith('home'),
    loadChildren: () =>
      import('./home/home.module').then((module) => module.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
