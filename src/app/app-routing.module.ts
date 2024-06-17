import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Modules
import { AuthRoutingModule } from './auth/auth.routing';
import { PageRoutingModule } from './pages/pages.routing';

import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [

  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AuthRoutingModule,
    PageRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
