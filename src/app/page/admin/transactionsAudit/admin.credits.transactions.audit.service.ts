import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ORLPService} from '../../../services/orlp.service';
import {TransactionsDTO} from "../../../dto/TransactionsDTO/transactionsDTO";
import {DTOConverter} from "../../../dto/dto.converter";

@Injectable()
export class AdminTransactionsAudit{

  constructor(private orlp: ORLPService) { }

  getCreditsTransactionHistory() : Observable<TransactionsDTO[]>{
    return this.orlp.get("/api/admin/audit/transactions")
      .map((response: Response) => <TransactionsDTO[]>
            (DTOConverter.jsonToTransactionsArray(response.json())));
      }
}
