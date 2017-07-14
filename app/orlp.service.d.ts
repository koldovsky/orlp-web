import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
export declare class ORLPService {
    private http;
    private url;
    constructor(http: Http);
    get(url: string): Observable<Response>;
    post(url: string, body: any): Observable<Response>;
}
