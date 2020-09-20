import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LOGIN_FORM, LOGIN_FORM_NAMES } from '../../models/login-form.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit {
  form: FormGroup = LOGIN_FORM;
  formNames = LOGIN_FORM_NAMES;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(): void {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
  }

}
