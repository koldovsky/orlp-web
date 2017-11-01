import {Component, OnInit} from '@angular/core';
import {AdminUsersService} from './admin.users.service';
import {Link} from '../../../dto/link';
import {ORLPService} from '../../../services/orlp.service';
import {AdminUsers} from '../../../dto/AdminDTO/admin.user.DTO';
import {TableColumnDTO} from '../../../dto/TableColumnDTO';

@Component({
  providers: [AdminUsersService],
  templateUrl: ('./admin.users.component.html'),
  styleUrls: ['./admin.all.users.style.css']
})

export class AdminUsersComponent implements OnInit {
  public users: AdminUsers[];
  public usersListFilter: string;
  public actionSort = true;
  courseColumns: TableColumnDTO[] = [new TableColumnDTO('person_firstName', 'First Name', '\u2191'),
    new TableColumnDTO('person_lastName', 'Last Name', ''),
    new TableColumnDTO('account_email', 'e-mail', ''),
    new TableColumnDTO('account_status', 'Account Status', '')];
  selectedSortedParam: TableColumnDTO = this.courseColumns[0];
  public currentPage = 1;
  public lastPage: number;

  constructor(private orlp: ORLPService,
              private adminUsersSevice: AdminUsersService) {
  }

  ngOnInit(): void {
    this.getUsers(this.currentPage);
  }

  getUsers(numberPage: number) {
    this.adminUsersSevice.getUsers(numberPage, this.selectedSortedParam.nameColumnParam, this.actionSort)
      .subscribe(value => {
        this.users = value.users;
        this.lastPage = value.totalPages;
        this.currentPage = numberPage;
      });
  }
  public sortBy(param: TableColumnDTO) {
    if (param === this.selectedSortedParam) {
      this.actionSort = !this.actionSort;
    }else {
      this.actionSort = true;
      this.selectedSortedParam.symbolSorting = '';
    }
    if (this.actionSort) {
      param.symbolSorting = '\u2191';
    } else {
      param.symbolSorting = '\u2193';
    }
    this.selectedSortedParam = param;
    this.getUsers(this.currentPage);
  }

  public getUserLink(link: Link): string {
    return this.orlp.getShortLink(link);
  }
}
