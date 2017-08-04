import { OnInit } from "@angular/core";
import { CourseInfoService } from "./courseInfo.service";
import { ActivatedRoute } from "@angular/router";
import { ORLPService } from "../../services/orlp.service";
export declare class CourseInfoComponent implements OnInit {
    private route;
    private orlp;
    private courseService;
    private url;
    private decks;
    private course;
    private sub;
    private errorMessage;
    constructor(route: ActivatedRoute, orlp: ORLPService, courseService: CourseInfoService);
    ngOnInit(): void;
    takeCourse(): void;
    private takeDecks(course);
    private decodeLink();
}
