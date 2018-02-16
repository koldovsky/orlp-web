import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from '../../services/orlp.service';
import {DTOConverter} from '../../dto/dto.converter';
import {NGXLogger} from 'ngx-logger';
import {ProfilePersonalInfoDTO} from '../../dto/UserProfileDTO/ProfilePersonalInfoDTO';
import {ProfileDataDTO} from '../../dto/UserProfileDTO/ProfileDataDTO';
import {ProfileImageDTO} from '../../dto/UserProfileDTO/ProfileImageDTO';
import {ProfilePasswordDTO} from '../../dto/UserProfileDTO/ProfilePasswordDTO';
import {MessageDTO} from '../../dto/MessageDTO';
import {AccountDTO} from "../../dto/AccountDTO/accountDTO";

@Injectable()
export class ProfileService {
  private url = '/api/profile' ;

  constructor(private orlp: ORLPService,
              private logger: NGXLogger) {
  }

  getProfileData(): Observable<ProfileDataDTO> {
    return this.orlp.get(this.url)
      .map((response: Response) => <ProfileDataDTO> DTOConverter.jsonToProfileDataDTO(response.json()))
      .catch(this.handleError);
  }

  updatePersonalInfo(person: ProfilePersonalInfoDTO): Observable<ProfilePersonalInfoDTO> {
    return this.orlp.put(this.url + '/personal-info', person)
      .map((response: Response) => <ProfilePersonalInfoDTO> DTOConverter.jsonToProfilePersonalInfoDTO(response.json()))
      .catch(this.handleError);
  }

  changePassword(password: ProfilePasswordDTO): Observable<Response> {
    return this.orlp.put(this.url + '/password', password)
      .map((response: Response) => this.logger.log(response))
      .catch(this.handleError);
  }

  uploadProfileImage(image: ProfileImageDTO): Observable<ProfileImageDTO> {
    return this.orlp.post(this.url + '/image', image)
      .map((response: Response) => <ProfileImageDTO> DTOConverter.jsonToProfileImageDTO(response.json()))
      .catch(this.handleError);
  }

  deleteProfileImage() {
    return this.orlp.delete(this.url + '/image')
      .map((response: Response) => this.logger.log(response))
      .catch(this.handleError);
  }

  deleteProfile() {
    return this.orlp.delete(this.url)
      .map((response: Response) => this.logger.log(response))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    this.logger.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  getAccountDetails(): Observable<AccountDTO> {
    return this.orlp.get('api/profile/learning-details').map((response: Response) =>
      DTOConverter.jsonToAccountDTO(response.json()));
  }

  updateUserProfile(accountDetails: AccountDTO) {
    return this.orlp.put('api/profile/learning-details', accountDetails).catch(this.handleError);
  }
}
