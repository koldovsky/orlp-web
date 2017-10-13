import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from '../../services/orlp.service';
import {UserDetailsDto} from '../../dto/UserDetailsDto';
import {DTOConverter} from '../../dto/dto.converter';
import {Person} from '../../dto/Person';
import {PasswordDTO} from '../../dto/PasswordDTO';

@Injectable()
export class ProfileService {
  constructor(private orlp: ORLPService) {
  }

  getUserProfile(): Observable<UserDetailsDto> {
    return this.orlp.get('/api/private/user/profile')
      .map((response: Response) => <UserDetailsDto> DTOConverter.jsonToUserDetails(response.json()))
      .catch(this.handleError);
  }

  changePersonalData(person: Person) {
    return this.orlp.put('/api/private/user/profile/data', person)
      .map((response: Response) => console.log())
      .catch(this.handleError);
  }

  changePassword(password: PasswordDTO) {
    console.log('passwords');
    console.log(password.currentPassword);
    console.log(password.newPassword);
    return this.orlp.put('/api/private/user/profile/password-change', password)
      .map((response: Response) => console.log())
      .catch(this.handleError);
  }

  deleteProfile() {
    return this.orlp.get('/api/private/user/profile/delete')
      .map((response: Response) => console.log())
      .catch(this.handleError);
  }

  addImage(file: any) {
    return this.orlp.post('/api/private/user/profile/image', file)
      .map((response: Response) => response.json());
  }

  getImageProfile() {
    return this.orlp.get('/api/private/user/profile/image')
      .map((response: Response) => console.log())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
