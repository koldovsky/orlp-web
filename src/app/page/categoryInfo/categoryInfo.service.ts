import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from '../../services/orlp.service';
import {CategoryLink} from '../../dto/CategoryDTO/link.category.DTO';
import {DTOConverter} from '../../dto/dto.converter';
import {NGXLogger} from 'ngx-logger';

@Injectable()
export class CategoryInfoService {

    constructor(private orlp: ORLPService,
                private logger: NGXLogger) {
    }

    public getCategory(url: string): Observable<CategoryLink> {
      console.log(url + ' - wthhfhajkfhkjasnkd fh kladsnk');
        return this.orlp.get(url)
            .map((response: Response) => <CategoryLink> DTOConverter
              .jsonToPublicCategory(response.json()))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        this.logger.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}
