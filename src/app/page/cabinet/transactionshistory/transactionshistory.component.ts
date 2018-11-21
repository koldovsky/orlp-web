import { Component, OnInit } from '@angular/core';
import {TransactionshistoryService} from "./transactionshistory.service";
import {TransactionsDTO} from "../../../dto/TransactionsDTO/transactionsDTO";
import {CabinetService} from '../cabinet.service';
import {UserDTO} from "../../../dto/UsersDTO/UserDTO";

@Component({
  providers: [TransactionshistoryService, CabinetService],
  selector: 'app-transactionshistory',
  templateUrl: './transactionshistory.component.html',
  styleUrls: ['./transactionshistory.component.css']
})
export class TransactionshistoryComponent implements OnInit {
  transactionslist: TransactionsDTO[];
  public user: UserDTO;

  constructor(private transactionsHistoryService: TransactionshistoryService, private cabinetService: CabinetService) { }

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
      this.transactionslist = response);
  }

}
