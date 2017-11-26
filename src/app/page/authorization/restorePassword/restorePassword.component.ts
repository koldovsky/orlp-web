import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {RestorePasswordService} from './restorePassword.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  templateUrl: ('./restorePassword.component.html'),
  styleUrls: ['./restorePassword.component.css']
})

export class RestorePasswordComponent implements OnInit {
  public email: string;
  private sub: Subscription;
  public accountStatus: string;

  constructor(private router: Router, private restorePasswordService: RestorePasswordService) {
  }

  ngOnInit(): void {

  }

  sendRestorePasswordMail() {
    this.restorePasswordService.sendRestorePasswordMail(this.email).subscribe(
      (accountStatus) => {
        this.accountStatus = accountStatus;
        console.log(accountStatus === 'LOCAL');
      });
  }

  checkDataStatus(data: Response) {
  }
}
