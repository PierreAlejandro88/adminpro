import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [

  { path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent ,data: {title: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent ,data: {title: 'ProgressBar'}},
      { path: 'graphics1', component: Graphics1Component ,data: {title: 'Graphics 1'}},
      { path: 'account-settings', component: AccountSettingsComponent ,data: {title: 'Account Settings'}},
      { path: 'promises', component: PromisesComponent ,data: {title: 'Promises'}},
      { path: 'rxjs', component: RxjsComponent ,data: {title: 'RxJS'}},
    ]
  },
  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {}
