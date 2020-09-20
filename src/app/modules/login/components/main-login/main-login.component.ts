import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LOGIN_FORM, LOGIN_FORM_NAMES } from '../../models/login-form.model';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit {
  form: FormGroup = LOGIN_FORM;
  formNames = LOGIN_FORM_NAMES;

  constructor() { }

  ngOnInit(): void {
  }

}
