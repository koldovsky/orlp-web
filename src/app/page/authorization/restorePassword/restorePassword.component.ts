import {Component, OnInit} from '@angular/core';
import {RestorePasswordService} from './restorePassword.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: ('./restorePassword.component.html'),
  styleUrls: ['./restorePassword.component.css']
})

export class RestorePasswordComponent implements OnInit {
  public email: string;
  public accountStatus: string;
  public emailForm: FormGroup;
  public mailIsNotSent: boolean;

  constructor(private restorePasswordService: RestorePasswordService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
    });

  }

  sendRestorePasswordMail() {
    this.email = this.emailForm.value.email;
    this.accountStatus = '';
    this.restorePasswordService.sendRestorePasswordMail(this.email).subscribe(
      (accountStatus) => {
        this.mailIsNotSent = false;
        this.accountStatus = accountStatus;
      }, () => this.mailIsNotSent = true);
  }

  isEmailFormValid(): boolean {
    return this.emailForm.valid;
  }
}
