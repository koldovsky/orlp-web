import { OnInit } from '@angular/core';
import { ORLPService } from "../orlp.service";
import { CourseService } from "./course.service";
import { CoursePublic } from "../classes/public.course.DTO";
export declare class NavbarComponent implements OnInit {
    private courseService;
    private orlpService;
    courses: CoursePublic[];
    listFilter: string;
    url: string;
    errorMessage: string;
    constructor(courseService: CourseService, orlpService: ORLPService);
    ngOnInit(): void;
}
