import {Component, OnInit} from '@angular/core';
import {AdminUsersService} from './admin.users.service';
import {AdminUsers} from '../../../dto/admin.users.DTO';
import {ORLPService} from '../../../services/orlp.service';
import {Link} from '../../../dto/link';

@Component({
  selector: 'app-admin-all-users',
  providers: [AdminUsersService],
  templateUrl: ('./admin.users.component.html'),
  styleUrls: ['../admin.style.css']
})

export class AdminUsersComponent implements OnInit {
  users: AdminUsers[];
  errorMessage: string;

  constructor(private orlp: ORLPService,
              private adminUsersSevice: AdminUsersService) {
  }

  ngOnInit(): void {
    this.adminUsersSevice.getUsers()
      .subscribe(users => this.users = users,
        error => this.errorMessage = <any>error);
  }

  public getUserLink(link: Link): string {
    return this.orlp.getShortLink(link);
  }
}