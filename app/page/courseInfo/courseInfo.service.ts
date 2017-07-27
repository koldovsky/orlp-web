import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Response} from "@angular/http";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import {ORLPService} from "../../orlp.service";
import {DTOConverter} from "../../classes/dto.Converter";
import {CourseLink} from "../../classes/CourseDTO/link.course.DTO";
import {DeckPublic} from "../../classes/DeckDTO/public.deck.DTO";


@Injectable()
export class CourseInfoService {
    constructor(private orlp: ORLPService) {
    }

    getCourse(url: string): Observable<CourseLink> {
        return this.orlp.get(url)
            .map((response: Response) => DTOConverter.jsonToPublicLinkCourse(response.json()))
            .catch(this.handleError);
    }

    getDecks(course: CourseLink): Observable<DeckPublic[]> {
        let url = this.orlp.decodeLink(this.orlp.getShortLink(course.decks));
        return this.orlp.get(url)
            .map((response: Response) => <DeckPublic[]>(DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicDeck, response.json())))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}