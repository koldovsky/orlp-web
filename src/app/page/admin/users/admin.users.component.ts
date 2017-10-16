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
  public actionSort = true;
  public selectedSortedParam: string = 'id';
  public currentPage: number = 1;
  public lastPage: number;

  constructor(private orlp: ORLPService,
              private adminUsersSevice: AdminUsersService) {
  }

  ngOnInit(): void {
    this.getUsers(this.currentPage);
  }

  getUsers(numberPage: number) {
    this.adminUsersSevice.getUsers(numberPage, this.selectedSortedParam, this.actionSort)
      .subscribe(value => {
        this.users = value.users;
        this.lastPage = value.totalPages;
        this.currentPage = numberPage;
      });
  }
  public sortBy(param: string) {
    if (param === this.selectedSortedParam) {
      this.actionSort = !this.actionSort;
    }else {
      this.actionSort = true;
    }
    this.selectedSortedParam = param;
    this.getUsers(this.currentPage);
  }

  public getUserLink(link: Link): string {
    return this.orlp.getShortLink(link);
  }
}
