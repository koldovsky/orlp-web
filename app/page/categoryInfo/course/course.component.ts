import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from "../../../interfaces/course";
import {CourseService} from "./course.service";
import {ORLPService} from "../../../orlp.service";
import {CoursePublic} from "../../../classes/CourseDTO/public.course.DTO";

@Component({
    selector: 'course-table',
    template: require('./course.component.html!text')
})
export class CourseComponent implements OnInit {
    public courses: CoursePublic[];
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

    addCourse(value: CoursePublic) {
        this.courseService.addCourse(value, this.url).subscribe(
            data => this.courses.push(data),
            error => console.log(error)
        );
    }
}