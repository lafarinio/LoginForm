import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLoginComponent } from './components/main-login/main-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    MainLoginComponent,
    ModalComponent
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
