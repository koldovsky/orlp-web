import { ORLPService } from "../../../orlp.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { CourseLink } from "../../../classes/CourseDTO/link.course.DTO";
import { DeckPublic } from "../../../classes/DeckDTO/public.deck.DTO";
import { Link } from "../../../classes/link";
export declare class CourseService {
    private orlp;
    constructor(orlp: ORLPService);
    getCourse(url: string): Observable<CourseLink[]>;
    getDecks(link: Link): Observable<DeckPublic[]>;
    private handleError(error);
}
