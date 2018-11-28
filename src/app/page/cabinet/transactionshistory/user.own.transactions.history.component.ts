import { Component, OnInit } from '@angular/core';
import {UserOwnTransactionsHistoryService} from "./user.own.transactions.history.service";
import {TransactionsDTO} from "../../../dto/TransactionsDTO/transactionsDTO";
import {CabinetService} from '../cabinet.service';
import {UserDTO} from "../../../dto/UsersDTO/UserDTO";

@Component({
  providers: [UserOwnTransactionsHistoryService, CabinetService],
  templateUrl: './user.own.transactions.history.component.html',
  styleUrls: ['./user.own.transactions.history.component.css']
})
export class UserOwnTransactionsHistoryComponent implements OnInit {
  creditsTransactionsList: TransactionsDTO[];
  public user: UserDTO;

  constructor(private transactionsHistoryService: UserOwnTransactionsHistoryService, private cabinetService: CabinetService) { }

  ngOnInit(): void {
    this.loadTransactionsHistoryForUser();
  }

  loadTransactionsHistoryForUser(): void {
    this.cabinetService.getUser()
      .subscribe(user => {
        this.user = user;
        this.getTransactionsList(user.id)
        }
      );
  }

  getTransactionsList(userId: number){
    this.transactionsHistoryService.getList(userId)
      .subscribe(response =>
      this.creditsTransactionsList = response);
  }

}
