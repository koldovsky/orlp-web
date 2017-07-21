import { OnInit } from '@angular/core';
import { CourseService } from "./course.service";
import { ORLPService } from "../../../orlp.service";
import { CoursePublic } from "../../../classes/CourseDTO/public.course.DTO";
export declare class CourseComponent implements OnInit {
    private courseService;
    private orlpService;
    courses: CoursePublic[];
    errorMessage: string;
    url: string;
    constructor(courseService: CourseService, orlpService: ORLPService);
    ngOnInit(): void;
    addCourse(value: CoursePublic): void;
}
