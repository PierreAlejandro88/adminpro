import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [AppComponent, NotfoundComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, AuthModule],
  providers: [
    provideCharts(withDefaultRegisterables())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
