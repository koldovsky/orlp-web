import {Component, OnInit, Output} from '@angular/core';
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

  private takeUser() {
    this.decodeLink();
    this.adminUserSevice.getUser(this.url).subscribe(
      user => this.user = user);
  }

  private decodeLink() {
    this.url = this.orlp.decodeLink(this.url);
  }

  updateAccountState(currentUser: AdminUsers) {
    this.adminUserSevice.updateAccountState(currentUser, this.url).subscribe(
      user => this.user = user,
      error => console.log(error)
    );
  }

  deleteAccountState() {
    this.adminUserSevice.deleteAccountState(this.url).subscribe(
      user => this.user = user,
      error => console.log(error)
    );
  }

  toggleDelete() {
    this.clickedButton = true;
  }

  toggleUp() {
    this.clickedButton = false;
  }

  onOK(currentUser: AdminUsers) {
    switch (currentUser.accountStatus) {
      case 'ACTIVE': {
        if (this.clickedButton) {
          this.deleteAccountState();
        } else {
          this.updateAccountState(currentUser);
        }
        break;
      }
      case 'DELETED': {
        this.deleteAccountState();
        break;
      }
      case 'BLOCKED': {
        this.updateAccountState(currentUser);
      }
    }
  }
}
