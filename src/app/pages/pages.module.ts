import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    PagesComponent,
    AccountSettingsComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ComponentsModule
  ]
})
export class PagesModule { }
