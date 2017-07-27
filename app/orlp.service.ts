import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Link} from "./classes/link";


@Injectable()
export class ORLPService {

    private SERVER_ADDRESS: string = "http://localhost:8080/";

    constructor(private http: Http) {
    }

    get(url: string): Observable<Response> {
        return this.http.get(this.SERVER_ADDRESS + url, {withCredentials: true});
    }

    post(url: string, body: any) {
        return this.http.post(this.SERVER_ADDRESS + url, body , {withCredentials: true});
    }

    put(url: string, body: any) {
        return this.http.put(this.SERVER_ADDRESS + url, body, {withCredentials: true});
    }

    delete(url: string, body: any) {
        return this.http.delete(this.SERVER_ADDRESS + url, body);
    }

    public getShortLink(link: Link) {
        let url: string = link.href;
        url = url.replace(this.SERVER_ADDRESS, "");
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