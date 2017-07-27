import {Injectable} from '@angular/core';
import {ORLPService} from "../../../orlp.service";
import {Observable} from "rxjs/Observable";
import {Response} from "@angular/http";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {DTOConverter} from "../../../classes/dto.Converter";
import {CourseLink} from "../../../classes/CourseDTO/link.course.DTO";
import {DeckPublic} from "../../../classes/DeckDTO/public.deck.DTO";
import {Link} from "../../../classes/link";

@Injectable()
export class CourseService {
    constructor(private orlp: ORLPService) {
    }

    getCourse(url: string): Observable<CourseLink[]> {
        return this.orlp.get(url)
            .map((response: Response) => <CourseLink[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicLinkCourse, response.json()))
            .catch(this.handleError);
    }

    getDecks(link: Link): Observable<DeckPublic[]> {
        let shortLink: string = this.orlp.getShortLink(link);
        shortLink = this.orlp.decodeLink(shortLink);

        return this.orlp.get(shortLink)
            .map((response: Response) => <DeckPublic[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicDeck, response.json()))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}
