import {Component, OnInit} from '@angular/core';
import {MainService} from "./main.service";

import {ORLPService} from "../../orlp.service";
import {Link} from "../../classes/link";
import {CategoryTop} from "../../classes/top.category.DTO";
import {CourseTop} from "../../classes/top.course.DTO";

@Component({
    template: require('app/page/main/main.component.html!text'),
    styleUrls: ['app/page/main/main.css']
})

export class MainComponent implements OnInit {
    public categories: CategoryTop[];
    public courses: CourseTop[];
    errorMessage: string;

    constructor(private mainService: MainService,
                private orlp: ORLPService){}

    ngOnInit(): void {
        this.mainService.getCategories()
            .subscribe(category => this.categories = category,
                error => this.errorMessage = <any>error);

        this.mainService.getCourses()
            .subscribe(course => this.courses = course,
                error => this.errorMessage = <any>error);
    }

    getCategoryLink(link: Link): string {
        return this.orlp.getShortLink(link);
    }

    getCourseLink(link: Link): string {
        return this.orlp.getShortLink(link);
    }
}

