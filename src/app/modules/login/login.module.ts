import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLoginComponent } from './components/main-login/main-login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainLoginComponent
  ],
  exports: [
    MainLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
