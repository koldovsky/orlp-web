import { Injectable } from '@angular/core';
import {Http, RequestMethod, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ORLPService {

    private url: string = "http://localhost:8080/";

    constructor(private http: Http) { }

    get(url : string) : Observable<Response> {
        return this.http.get(this.url +  url , RequestMethod.Get);
    }

    post(url : string, body : any) {
        return this.http.post(this.url + url, body, {});
    }

}