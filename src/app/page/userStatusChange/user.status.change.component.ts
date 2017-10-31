import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { FormBuilder} from '@angular/forms';
import {UserStatusChangeService} from './user.status.change.service';
import {AuthorizationService} from "../authorization/authorization.service";

@Component({
  providers: [UserStatusChangeService],
  templateUrl: ('./user.status.change.component.html'),
  styleUrls: ['user.status.change.component.css']
})
export class UserStatusChangeComponent implements OnInit {

  public deleteMessage = false;
  public blockedMessage = false;
  public inactiveMessage = false;

  constructor(private userStatusChangeService: UserStatusChangeService, private router: Router,
              private authorizationService: AuthorizationService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('status') === 'DELETED') {
      this.authorizationService.emitIsAuthorizedChangeEvent(false);
      this.deleteMessage = true;
    }else if (sessionStorage.getItem('status') === 'INACTIVE') {
      this.authorizationService.emitIsAuthorizedChangeEvent(false);
      this.inactiveMessage = true;
    } else if (sessionStorage.getItem('status') === 'BLOCKED') {
      this.blockedMessage = true;
    }

  }
}
