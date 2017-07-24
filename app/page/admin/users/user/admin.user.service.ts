import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from "../../../../orlp.service";
import {UsersPublic} from "../../../../classes/public.users.DTO";
import {DTOConverter} from "../../../../classes/dto.Converter";

@Injectable()
export class AdminUserService {

    constructor(private orlp: ORLPService) {
    }

    public getUser(url: string): Observable<UsersPublic> {
        return this.orlp.get(url)
            .map((response: Response) => <UsersPublic> DTOConverter.jsonToPublicUsers(response.json()))
            .catch(this.handleError);
    }

    updateAccountState(body: UsersPublic, url: string): Observable<UsersPublic> {
        return this.orlp.put(url, body)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    deleteAccountState(body: UsersPublic, url: string): Observable<UsersPublic> {
        return this.orlp.delete(url, body)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}