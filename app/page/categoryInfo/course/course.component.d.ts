import { OnInit } from '@angular/core';
import { CourseService } from "./course.service";
import { ORLPService } from "../../../services/orlp.service";
import { CourseLink } from "../../../dto/CourseDTO/link.course.DTO";
import { DeckPublic } from "../../../dto/DeckDTO/public.deck.DTO";
export declare class CourseComponent implements OnInit {
    private courseService;
    private orlpService;
    courses: CourseLink[];
    decks: DeckPublic[];
    url: string;
    constructor(courseService: CourseService, orlpService: ORLPService);
    ngOnInit(): void;
    getDecks(course: CourseLink): void;
}
