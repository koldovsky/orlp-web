import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from '../../../services/orlp.service';
import {DTOConverter} from '../../../dto/dto.converter';
import {AdminAuditWithPagesDTO} from '../../../dto/AdminDTO/admin.audit.with.pages.DTO';

@Injectable()
export class AdminAuditService {

  constructor(private orlp: ORLPService) {
  }

  getFullAuditList(numberPage: number, selectedSortingParam: string, ascending: boolean): Observable<AdminAuditWithPagesDTO> {
    return this.orlp.get('api/admin/audit?p=' + numberPage + '&sortBy=' + selectedSortingParam + '&asc=' + ascending)
      .map((response: Response) => <AdminAuditWithPagesDTO>
        DTOConverter.jsonToAdminAuditByPage(response.json()))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
