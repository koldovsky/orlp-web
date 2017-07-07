import { Injectable } from '@angular/core';
import {Http, RequestMethod, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ORLPService {

    token : string = "";


    constructor(private http: Http) { }

    get(url : string) : Observable<Response> {
        return this.http.get(url, RequestMethod.Get);
    }

    post(url : string, body : any) {
        return this.http.post(url, RequestMethod.Post, body);
    }

}