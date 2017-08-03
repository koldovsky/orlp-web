import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from "./course.service";
import {ORLPService} from "../../../orlp.service";
import {CourseLink} from "../../../classes/CourseDTO/link.course.DTO";
import {DeckPublic} from "../../../classes/DeckDTO/public.deck.DTO";

@Component({
    selector: 'course-table',
    template: require('./course.component.html!text'),
    styleUrls: ['app/page/categoryInfo/categoryInfo.css']
})

export class CourseComponent implements OnInit {
    public courses: CourseLink[];
    public decks: DeckPublic[];
    @Input() url: string;

    constructor(private courseService: CourseService,
                private orlpService: ORLPService) {
    }

    ngOnInit(): void {
        this.url = this.orlpService.decodeLink(this.url);

        this.courseService.getCourse(this.url)
            .subscribe(courses => this.courses = courses);
    }

    getDecks(course: CourseLink) {
        this.courseService.getDecks(course.decks)
            .subscribe(decks => this.decks = decks);
    }
}
