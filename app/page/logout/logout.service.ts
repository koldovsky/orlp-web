import {Injectable} from "@angular/core";
import {CookieService} from "angular2-cookie/core";
@Injectable()
export class LogoutService {
    cookieWithToken: string = 'Authentication';

    constructor(private cookie: CookieService) {
    }

    isAuthorized(): boolean {
        console.log(this.cookie.get(this.cookieWithToken));
        if (this.cookie.get(this.cookieWithToken) != null) {
            return true;
        }
        return false;
    }

    logout(): boolean {
        if (this.isAuthorized()) {
            this.cookie.remove(this.cookieWithToken);
            return true;
        } return false;
    }
}


