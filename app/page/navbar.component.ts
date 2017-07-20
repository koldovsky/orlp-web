import {Component, Input, OnInit} from '@angular/core';
import {ORLPService} from "../orlp.service";
import {CourseService} from "./course.service";
import {CoursePublic} from "../classes/public.course.DTO";

@Component({
    selector: 'page',
    template: require('./navbar.component.html!text'),
    styleUrls: ['app/page/navbar.css', 'app/page/dropdown.css']
})

export class NavbarComponent implements OnInit {
    courses: CoursePublic[];
    listFilter: string;
    @Input() url: string;
    public errorMessage: string;

    constructor(private courseService: CourseService,
                private orlpService: ORLPService) {
    }

    ngOnInit(): void {
        this.courseService.getCourse(this.url)
            .subscribe(courses => this.courses = courses,
                error => this.errorMessage = <any>error);
    }
}