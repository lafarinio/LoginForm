import { FormControl, FormGroup, Validators } from '@angular/forms';

export const LOGIN_FORM_NAMES = {
  LOGIN: 'login',
  PASSWORD: 'password'
};

export const LOGIN_FORM: FormGroup = new FormGroup({
  [LOGIN_FORM_NAMES.LOGIN]: new FormControl('', [Validators.required]),
  [LOGIN_FORM_NAMES.PASSWORD]: new FormControl('', [Validators.required])
});
