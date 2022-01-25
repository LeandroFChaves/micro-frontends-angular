import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { endsWith } from './router.utils';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home', },
  { matcher: endsWith('home'), component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
