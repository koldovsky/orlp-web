import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Link} from '../dto/link';
import * as ORLPSettings from './orlp.settings';

@Injectable()
export class ORLPService {

  constructor(private http: Http) {
  }

  get(url: string): Observable<Response> {
    return this.http.get(ORLPSettings.SERVER_ADDRESS + url, {withCredentials: true});
  }

  post(url: string, body: any) {
    return this.http.post(ORLPSettings.SERVER_ADDRESS + url, body, {withCredentials: true});
  }

  put(url: string, body: any) {
    return this.http.put(ORLPSettings.SERVER_ADDRESS + url, body, {withCredentials: true});
  }

  delete(url: string) {
    return this.http.delete(ORLPSettings.SERVER_ADDRESS + url, {withCredentials: true});
  }

  public getShortLink(link: Link) {
    let url: string = link.href;
    url = url.replace(ORLPSettings.SERVER_ADDRESS, '');
    url = btoa(url);
    url = encodeURI(url);
    return url;
  }

  public decodeLink(url: string) {
    url = decodeURI(url);
    url = atob(url);
    return url;
  }
}
