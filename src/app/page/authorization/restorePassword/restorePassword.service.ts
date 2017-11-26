import {Response} from '@angular/http';
import {NGXLogger} from 'ngx-logger';
import {Injectable} from '@angular/core';
import {ORLPService} from '../../../services/orlp.service';
import {Observable} from "rxjs/Observable";

@Injectable()
export class RestorePasswordService {
  private url = 'api/reset/password';

  constructor(private orlp: ORLPService,
              private logger: NGXLogger) {
  }

  sendRestorePasswordMail(email: string): Observable<string> {
    return this.orlp.put(this.url, email).map((response: Response) => response.text());
  }
}
