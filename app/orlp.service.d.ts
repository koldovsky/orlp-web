import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Link } from "./classes/link";
export declare class ORLPService {
    private http;
    private SERVER_ADDRESS;
    constructor(http: Http);
    get(url: string): Observable<Response>;
    post(url: string, body: any): Observable<Response>;
    put(url: string, body: any): Observable<Response>;
    getShortLink(link: Link): string;
    decodeLink(url: string): string;
}
