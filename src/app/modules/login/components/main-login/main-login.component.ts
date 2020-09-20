import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LOGIN_FORM, LOGIN_FORM_NAMES } from '../../models/login-form.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit, OnDestroy {
  form: FormGroup = LOGIN_FORM;
  formNames = LOGIN_FORM_NAMES;

  constructor(private modalService: NgbModal,
              private router: Router) { }

  ngOnInit(): void {
  }

  showModal(): void {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.answer.subscribe(res => {
      this.handleResponse(res);
    });
  }

  private handleResponse(resOk: boolean): void {
    if (resOk) {
      this.login();
    }
  }

  private login(): void {
    this.router.navigateByUrl('app/dashboard');
  }

  ngOnDestroy(): void {
    this.form.reset();
  }

}
