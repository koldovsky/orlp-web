import { CookieService } from "angular2-cookie/core";
export declare class LogoutService {
    private cookie;
    cookieWithToken: string;
    constructor(cookie: CookieService);
    isAuthorized(): boolean;
    logout(): boolean;
}
