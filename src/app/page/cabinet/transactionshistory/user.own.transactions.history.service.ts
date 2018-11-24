import { Injectable } from '@angular/core';
import {ORLPService} from '../../../services/orlp.service';
import {Observable} from "rxjs";
import {TransactionsDTO} from "../../../dto/TransactionsDTO/transactionsDTO";
import {HttpClient} from "@angular/common/http";
import {Response} from "@angular/http";
import {AdminAuditWithPagesDTO} from "../../../dto/AdminDTO/admin.audit.with.pages.DTO";
import {DTOConverter} from "../../../dto/dto.converter";

@Injectable()
export class UserOwnTransactionsHistoryService {

  constructor(private orlp: ORLPService) { }

  getList(userId: number) : Observable<TransactionsDTO[]>{
    return this.orlp.get("/api/private/user/"+ userId +"/transactions")
      .map((response: Response) => <TransactionsDTO[]>
      (DTOConverter.jsonToTransactionsArray(response.json())));
  }

}
