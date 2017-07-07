import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from "../../../interfaces/course";
import {CourseService} from "./course.service";

@Component({
    selector: 'table1',
    template: require('./course.component.html!text')
})
export class CourseComponent implements OnInit {
    courses: ICourse[];
    errorMessage: string;
    @Input() id: number;

    constructor(private courseService: CourseService) {
    }

    ngOnInit(): void {
        this.courseService.getCourse(this.id)
            .subscribe(courses => this.courses = courses,
                error => this.errorMessage = <any>error);
    }

    addCourse(value: ICourse) {
        this.courseService.addCourse(value, this.id).subscribe(
            data => this.courses.push(data),
            error => console.log(error)
        );
    }
}