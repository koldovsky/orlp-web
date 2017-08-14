import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from '../../../../services/orlp.service';
import {AdminUsers} from '../../../../dto/AdminDTO/admin.user.DTO';
import {DTOConverter} from '../../../../dto/dto.converter';

@Injectable()
export class AdminUserService {

  constructor(private orlp: ORLPService) {
  }

  public getUser(url: string): Observable<AdminUsers> {
    return this.orlp.get(url)
      .map((response: Response) => <AdminUsers> DTOConverter.jsonToAdminUsers(response.json()))
      .catch(this.handleError);
  }

  updateAccountState(body: AdminUsers, url: string): Observable<AdminUsers> {
    return this.orlp.put(url, body)
      .map((response: Response) => <AdminUsers> DTOConverter.jsonToAdminUsers(response.json()))
      .catch(this.handleError);
  }

  deleteAccountState(url: string): Observable<AdminUsers> {
    return this.orlp.delete(url)
      .map((response: Response) => <AdminUsers> DTOConverter.jsonToAdminUsers(response.json()))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
