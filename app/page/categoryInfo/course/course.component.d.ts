import { OnInit } from '@angular/core';
import { CourseService } from "./course.service";
import { ORLPService } from "../../../orlp.service";
import { CourseLink } from "../../../classes/CourseDTO/link.course.DTO";
import { DeckPublic } from "../../../classes/DeckDTO/public.deck.DTO";
export declare class CourseComponent implements OnInit {
    private courseService;
    private orlpService;
    courses: CourseLink[];
    decks: DeckPublic[];
    errorMessage: string;
    url: string;
    constructor(courseService: CourseService, orlpService: ORLPService);
    ngOnInit(): void;
    getDecks(course: CourseLink): void;
    addCourse(value: CourseLink): void;
}
