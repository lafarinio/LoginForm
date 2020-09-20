import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { LoginModule } from '../modules/login/login.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
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
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
