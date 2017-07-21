import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Link } from "./classes/link";
import { CookieService } from "angular2-cookie/core";
export declare class ORLPService {
    private http;
    private cookieService;
    private SERVER_ADDRESS;
    constructor(http: Http, cookieService: CookieService);
    get(url: string): Observable<Response>;
    post(url: string, body: any): Observable<Response>;
    getShortLink(link: Link): string;
    decodeLink(url: string): string;
    getCookie(): void;
}
