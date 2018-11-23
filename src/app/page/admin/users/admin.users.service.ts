import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from '../../../services/orlp.service';
import {AdminUsers} from '../../../dto/AdminDTO/admin.user.DTO';
import {DTOConverter} from '../../../dto/dto.converter';
import {AdminUsersByPage} from '../../../dto/AdminDTO/admin.users.with.pages.DTO';
import {NGXLogger} from 'ngx-logger';
import {SendPointsToFriendDTO} from '../../../dto/UserProfileDTO/SendPointsToFriendDTO';
import {SetPointsByAdminDTO} from '../../../dto/AdminDTO/admin.user.points.DTO';

@Injectable()
export class AdminUsersService {

  constructor(private orlp: ORLPService,
              private logger: NGXLogger) {
  }

  getUsers(numberPage: number, selectedSortingParam: string, ascending: boolean): Observable<AdminUsersByPage> {
    return this.orlp.get('api/admin/users?p=' + numberPage + '&sortBy=' + selectedSortingParam + '&asc=' + ascending)
      .map((response: Response) => <AdminUsersByPage>
        DTOConverter.jsonToAdminUsersByPage(response.json()))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    this.logger.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  setPoints(setPoints: SetPointsByAdminDTO) {
    return this.orlp.post('api/admin/users/points', setPoints)
      .map((response: Response) => <SetPointsByAdminDTO> DTOConverter.jsonToSetPointsDTO(response.json()));
  }
}
