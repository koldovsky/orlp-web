import {Injectable} from '@angular/core';
import {ORLPService} from "../../../orlp.service";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {DTOConverter} from "../../../classes/dto.Converter";
import {CourseLink} from "../../../classes/CourseDTO/link.course.DTO";
import {DeckPublic} from "../../../classes/DeckDTO/public.deck.DTO";

@Injectable()
export class CourseService {
    constructor(private orlp: ORLPService) {
    }

    getCourse(url: string): Observable<CourseLink[]> {
        return this.orlp.get(url)
            .map((response: Response) => <CourseLink[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicCourse, response.json()))
            .catch(this.handleError);
    }

    getDecks(url: string): Observable<DeckPublic[]> {
        url = url.replace("http://localhost:8080/", "");
        return this.orlp.get(url)
            .map((response: Response) => <DeckPublic[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicDeck, response.json()))
            .catch(this.handleError);
    }

    // getDecks(): Observable<DeckPublic[]> {
    //     return this.orlp.get('api/decks/ordered')
    //         .map((response: Response) => <DeckPublic[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToPublicCourse, response.json()))
    //         .catch(this.handleError);
    // }



    addCourse(body: CourseLink, url: string): Observable<CourseLink> {
        return this.orlp.post(url, body)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}

