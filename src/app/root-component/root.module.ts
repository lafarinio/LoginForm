import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { LoginModule } from '../modules/login/login.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RootRoutingModule } from './root-routing.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    NgbModule,
    StoreModule.forRoot({}),
    RootRoutingModule,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
