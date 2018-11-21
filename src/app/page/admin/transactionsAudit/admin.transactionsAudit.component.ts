import { Component, OnInit } from '@angular/core';
import {AdminTransactionsAudit} from './admin.transactionsAudit.service'
import {TransactionsDTO} from "../../../dto/TransactionsDTO/transactionsDTO";

@Component({
  selector: 'app-credits',
  templateUrl: './admin.transactionsAudit.component.html',
  styleUrls: ['./admin.transactionsAudit.component.css']
})
export class AdminTransactionsAuditComponent implements OnInit {
  transactionslist: TransactionsDTO[];

  constructor() { }

  ngOnInit() {
  }

}
