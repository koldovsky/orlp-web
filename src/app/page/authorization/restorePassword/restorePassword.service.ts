import {Response} from '@angular/http';
import {NGXLogger} from 'ngx-logger';
import {Injectable} from '@angular/core';
import {ORLPService} from '../../../services/orlp.service';

@Injectable()
export class RestorePasswordService {
  private url = 'api/reset/password';

  constructor(private orlp: ORLPService,
              private logger: NGXLogger) {
  }

  sendRestorePasswordMail(url: string, email: string) {
    return this.orlp.put(url, email).map((response: Response) => {

      this.logger.log(response.json());
    });
  }
}
