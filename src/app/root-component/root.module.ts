import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { LoginModule } from '../modules/login/login.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RootRoutingModule } from './root-routing.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    NgbModule,
    RootRoutingModule,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
