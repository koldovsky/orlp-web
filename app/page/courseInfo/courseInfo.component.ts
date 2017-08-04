import {Component, OnInit} from "@angular/core";
import {CourseInfoService} from "./courseInfo.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {ORLPService} from "../../services/orlp.service";
import {DeckPublic} from "../../dto/DeckDTO/public.deck.DTO";
import {CourseLink} from "../../dto/CourseDTO/link.course.DTO";
@Component({
    templateUrl: ('app/page/courseInfo/courseInfo.component.html'),
    styleUrls: ['app/page/courseInfo/courseInfo.css']

})
export class CourseInfoComponent implements OnInit {
    private url: string;
    private decks: DeckPublic[];
    private course: CourseLink;
    private sub: Subscription;
    private errorMessage: string;

    constructor(private route: ActivatedRoute,
                private orlp: ORLPService,
                private courseService: CourseInfoService) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                this.url = params['url'];

            }
        );
        this.takeCourse();

    }

    takeCourse() {
        this.decodeLink();
        this.courseService.getCourse(this.url).subscribe(
            course => {
                this.course = course;
                this.takeDecks(course)
            },
            error => this.errorMessage = <any>error
        );
    }

    private takeDecks(course: CourseLink) {
        this.courseService.getDecks(course).subscribe(
            decks => {
                this.decks = decks
                error => this.errorMessage = <any>error
            }
        );
    }

    private decodeLink() {
        this.url = this.orlp.decodeLink(this.url);
    }
}