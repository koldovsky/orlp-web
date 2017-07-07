import { OnInit } from '@angular/core';
import { ICourse } from "../../../interfaces/course";
import { CourseService } from "./course.service";
export declare class CourseComponent implements OnInit {
    private courseService;
    courses: ICourse[];
    errorMessage: string;
    id: number;
    constructor(courseService: CourseService);
    ngOnInit(): void;
    addCourse(value: ICourse): void;
}
