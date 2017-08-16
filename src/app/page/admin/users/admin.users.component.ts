import {Component, OnInit} from '@angular/core';
import {AdminUsersService} from './admin.users.service';
import {Link} from '../../../dto/link';
import {ORLPService} from '../../../services/orlp.service';
import {AdminUsers} from '../../../dto/AdminDTO/admin.user.DTO';

@Component({
  providers: [AdminUsersService],
  templateUrl: ('./admin.users.component.html'),
  styleUrls: ['./admin.all.users.style.css']
})

export class AdminUsersComponent implements OnInit {
  public users: AdminUsers[];
  public usersListFilter: string;

  constructor(private orlp: ORLPService,
              private adminUsersSevice: AdminUsersService) {
  }

  ngOnInit(): void {
    this.adminUsersSevice.getUsers()
      .subscribe(users => this.users = users);
  }

  public getUserLink(link: Link): string {
    return this.orlp.getShortLink(link);
  }
}
