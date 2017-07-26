import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import { ORLPService } from "../../orlp.service";
import { CourseLink } from "../../classes/CourseDTO/link.course.DTO";
import { DeckPublic } from "../../classes/DeckDTO/public.deck.DTO";
export declare class CourseInfoService {
    private orlp;
    constructor(orlp: ORLPService);
    getCourse(url: string): Observable<CourseLink>;
    getDecks(course: CourseLink): Observable<DeckPublic[]>;
    private handleError(error);
}
