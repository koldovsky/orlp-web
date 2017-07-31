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
<<<<<<< HEAD
    delete(url: string): Observable<Response>;
=======
    delete(url: string, body: any): Observable<Response>;
>>>>>>> 67379e59dc6f496bc59512745304868f74b77250
    getShortLink(link: Link): string;
    decodeLink(url: string): string;
}
