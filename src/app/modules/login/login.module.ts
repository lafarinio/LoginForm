import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLoginComponent } from './components/main-login/main-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { LoginStoreModule } from './store/login-store.module';



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
    LoginStoreModule
  ]
})
export class LoginModule { }
