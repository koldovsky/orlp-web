import { Component, OnInit } from '@angular/core';
import {AdminTransactionsAudit} from './admin.credits.transactions.audit.service'
import {TransactionsDTO} from "../../../dto/TransactionsDTO/transactionsDTO";

@Component({
  providers: [AdminTransactionsAudit],
  templateUrl: './admin.credits.transactions.audit.component.html',
  styleUrls: ['./admin.credits.transactions.audit.component.css']
})
export class AdminCreditsTransactionsAuditComponent implements OnInit {
  creditsTransactionsList: TransactionsDTO[];

  constructor(private adminTransactionsAudit: AdminTransactionsAudit) { }

  ngOnInit() {
    this.getTransactionsList();
  }

  getTransactionsList(){
    this.adminTransactionsAudit.getCreditsTransactionHistory()
      .subscribe(response =>
            this.creditsTransactionsList = response);
      }
}
