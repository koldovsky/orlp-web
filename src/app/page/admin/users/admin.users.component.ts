import {Component, OnInit} from '@angular/core';
import {AdminUsersService} from './admin.users.service';
import {Link} from '../../../dto/link';
import {ORLPService} from '../../../services/orlp.service';
import {AdminUsers} from '../../../dto/AdminDTO/admin.user.DTO';
import {TableColumnDTO} from '../../../dto/TableColumnDTO';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminDeck} from '../../../dto/AdminDTO/admin.deck.DTO';
import {SendPointsToFriendDTO} from '../../../dto/UserProfileDTO/SendPointsToFriendDTO';
import {AddPointsByAdminDTO} from '../../../dto/AdminDTO/admin.user.points.DTO';

@Component({
  providers: [AdminUsersService],
  templateUrl: ('./admin.users.component.html'),
  styleUrls: ['./admin.all.users.style.css']
})

export class AdminUsersComponent implements OnInit {
  public users: AdminUsers[];
  public selectedUser: AdminUsers;
  public usersListFilter: string;
  public actionSort = true;
  public success: boolean;

  courseColumns: TableColumnDTO[] = [new TableColumnDTO('person_firstName', 'First Name', '\u2191'),
    new TableColumnDTO('person_lastName', 'Last Name', ''),
    new TableColumnDTO('account_email', 'e-mail', ''),
    new TableColumnDTO('account_status', 'Account Status', '')];
  selectedSortedParam: TableColumnDTO = this.courseColumns[0];
  public currentPage = 1;
  public lastPage: number;
  sendForm: FormGroup;
  pointsSend: number;

  constructor(private orlp: ORLPService,
              private formBuilder: FormBuilder,
              private adminUsersSevice: AdminUsersService) {
  }

  ngOnInit(): void {
    this.getUsers(this.currentPage);

    const pointsValidator = [
      Validators.required,
      Validators.pattern(new RegExp('^[1-9][0-9]*$'))
    ];

    this.sendForm = this.formBuilder.group({
      points: ['', pointsValidator]
    });
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

  assignUser(user: AdminUsers): void {
    this.selectedUser = user;
    this.pointsSend = null;
    this.success = false;
  }

  addPoints() {
    this.success = false;
    this.adminUsersSevice.addPoints(new AddPointsByAdminDTO(this.selectedUser.email, this.pointsSend))
       .subscribe( (response) => {
         this.success = true;
      }, () => {
         this.success = false;
       });
  }

  isFormValid(): boolean {
    return this.sendForm.valid;
  }
}
