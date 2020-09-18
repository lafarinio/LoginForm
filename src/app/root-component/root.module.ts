import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { LoginModule } from '../modules/login/login.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
