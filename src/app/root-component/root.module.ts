import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { LoginModule } from '../modules/login/login.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RootRoutingModule } from './root-routing.module';
import { StoreModule } from '@ngrx/store';
import { DashboardModule } from '../modules/dashboard/dashboard.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    LoginModule,
    NgbModule,
    StoreModule.forRoot({}),
    RootRoutingModule,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
