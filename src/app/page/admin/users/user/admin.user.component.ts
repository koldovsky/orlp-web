import {Component, OnInit} from '@angular/core';
import {AdminUserService} from './admin.user.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {AdminUsers} from '../../../../dto/AdminDTO/admin.user.DTO';
import {ORLPService} from '../../../../services/orlp.service';

@Component({
  providers: [AdminUserService],
  templateUrl: ('./admin.user.component.html'),
  styleUrls: ['./admin.one.user.style.css']
})

export class AdminUserComponent implements OnInit {
  public user: AdminUsers;
  private sub: Subscription;
  private url: string;
  private clickedButton: boolean;

  constructor(private route: ActivatedRoute,
              private orlp: ORLPService,
              private adminUserSevice: AdminUserService) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => {
        const url = params['url'];
        this.url = url;
      }
    );
    this.takeUser();
  }

  private takeUser(): void {
    this.decodeLink();
    this.adminUserSevice.getUser(this.url).subscribe(
      user => this.user = user);
  }

  private decodeLink(): void {
    this.url = this.orlp.decodeLink(this.url);
  }

  activeteAccountStatus(currentUser: AdminUsers): void {
    this.adminUserSevice.activeteAccountState(currentUser, this.url).subscribe(
      user => this.user = user,
      error => console.log(error)
    );
  }

  blockAccountStatus(currentUser: AdminUsers): void {
    this.adminUserSevice.updateAccountState(currentUser, this.url).subscribe(
      user => this.user = user,
      error => console.log(error)
    );
  }

  deleteAccountStatus(): void {
    this.adminUserSevice.deleteAccountState(this.url).subscribe(
      user => this.user = user,
      error => console.log(error)
    );
  }

  toggleDelete(): void {
    if (confirm('Are you sure?')) {
      this.clickedButton = true;
      this.onOK();
    }
  }

  toggleUpdate(currentUser: AdminUsers): void {
    if (confirm('Are you sure?')) {
      this.clickedButton = false;
      this.onOK();
    }
  }

  onOK(): void {
    if (this.user.accountStatus === 'ACTIVE') {
      if (this.clickedButton) {
        this.deleteAccountStatus();
      } else {
        this.blockAccountStatus(this.user);
      }
    } else {
      this.activeteAccountStatus(this.user);
    }
  }
}
