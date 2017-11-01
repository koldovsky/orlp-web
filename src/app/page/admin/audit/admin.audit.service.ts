import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from '../../../services/orlp.service';
import {DTOConverter} from '../../../dto/dto.converter';
import {AdminAudit} from '../../../dto/AdminDTO/admin.audit.DTO';
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

  getAuditListSortedByAccountEmailAsc(): Observable<AdminAudit[]> {
    return this.orlp.get('api/admin/audit/sort/email/rise')
      .map((response: Response) => <AdminAudit[]>
        DTOConverter.jsonArrayToCollection(DTOConverter.jsonToAdminAudit, response.json()))
      .catch(this.handleError);
  }

  getAuditListSortedByAccountEmailDesc(): Observable<AdminAudit[]> {
    return this.orlp.get('api/admin/audit/sort/email/fall')
      .map((response: Response) => <AdminAudit[]>
        DTOConverter.jsonArrayToCollection(DTOConverter.jsonToAdminAudit, response.json()))
      .catch(this.handleError);
  }

  getAuditListSortedByActionAsc(): Observable<AdminAudit[]> {
    return this.orlp.get('api/admin/audit/sort/action/rise')
      .map((response: Response) => <AdminAudit[]>
        DTOConverter.jsonArrayToCollection(DTOConverter.jsonToAdminAudit, response.json()))
      .catch(this.handleError);
  }

  getAuditListSortedByActionDesc(): Observable<AdminAudit[]> {
    return this.orlp.get('api/admin/audit/sort/action/fall')
      .map((response: Response) => <AdminAudit[]>
        DTOConverter.jsonArrayToCollection(DTOConverter.jsonToAdminAudit, response.json()))
      .catch(this.handleError);
  }

  getAuditListSortedByIpAddressAsc(): Observable<AdminAudit[]> {
    return this.orlp.get('api/admin/audit/sort/ip/rise')
      .map((response: Response) => <AdminAudit[]>
        DTOConverter.jsonArrayToCollection(DTOConverter.jsonToAdminAudit, response.json()))
      .catch(this.handleError);
  }

  getAuditListSortedByIpAddressDesc(): Observable<AdminAudit[]> {
    return this.orlp.get('api/admin/audit/sort/ip/fall')
      .map((response: Response) => <AdminAudit[]>
        DTOConverter.jsonArrayToCollection(DTOConverter.jsonToAdminAudit, response.json()))
      .catch(this.handleError);
  }

  getAuditListSortedByTimeAsc(): Observable<AdminAudit[]> {
    return this.orlp.get('api/admin/audit/sort/time/rise')
      .map((response: Response) => <AdminAudit[]>
        DTOConverter.jsonArrayToCollection(DTOConverter.jsonToAdminAudit, response.json()))
      .catch(this.handleError);
  }

  getAuditListSortedByTimeDesc(): Observable<AdminAudit[]> {
    return this.orlp.get('api/admin/audit/sort/time/fall')
      .map((response: Response) => <AdminAudit[]>
        DTOConverter.jsonArrayToCollection(DTOConverter.jsonToAdminAudit, response.json()))
      .catch(this.handleError);
  }

  getAuditListSortedByRoleAsc(): Observable<AdminAudit[]> {
    return this.orlp.get('api/admin/audit/sort/role/rise')
      .map((response: Response) => <AdminAudit[]>
        DTOConverter.jsonArrayToCollection(DTOConverter.jsonToAdminAudit, response.json()))
      .catch(this.handleError);
  }

  getAuditListSortedByRoleDesc(): Observable<AdminAudit[]> {
    return this.orlp.get('api/admin/audit/sort/role/fall')
      .map((response: Response) => <AdminAudit[]>
        DTOConverter.jsonArrayToCollection(DTOConverter.jsonToAdminAudit, response.json()))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
