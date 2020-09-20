import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './login.reducer';
import { loginFeatureKey } from './login.state';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(loginFeatureKey, loginReducer),
  ]
})
export class LoginStoreModule { }
