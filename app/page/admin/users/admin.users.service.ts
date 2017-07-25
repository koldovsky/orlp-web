import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from "../../../orlp.service";
import {AdminUsers} from "../../../classes/admin.users.DTO";
import {DTOConverter} from "../../../classes/dto.Converter";

@Injectable()
export class AdminUsersService {

    constructor(private orlp: ORLPService) {
    }

    getUsers(): Observable<AdminUsers[]> {
        return this.orlp.get('api/admin/users')
            .map((response: Response) => <AdminUsers[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicUsers, response.json()))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}