import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from "./course.service";
import {ORLPService} from "../../../services/orlp.service";
import {CourseLink} from "../../../dto/CourseDTO/link.course.DTO";
import {DeckPublic} from "../../../dto/DeckDTO/public.deck.DTO";

@Component({
    selector: 'course-table',
    template: require('./course.component.html!text'),
    styleUrls: ['app/page/categoryInfo/categoryInfo.css']
})

export class CourseComponent implements OnInit {
    public courses: CourseLink[];
    public decks: DeckPublic[];
    public errorMessage: string;
    @Input() url: string;

    constructor(private courseService: CourseService,
                private orlpService: ORLPService) {
    }

    ngOnInit(): void {
        this.url = this.orlpService.decodeLink(this.url);

        this.courseService.getCourse(this.url)
            .subscribe(courses => this.courses = courses,
                error => this.errorMessage = <any>error);
    }

    getDecks(course: CourseLink) {
        this.courseService.getDecks(course.decks)
            .subscribe(decks => this.decks = decks,
                error => this.errorMessage = <any>error);
    }
}
