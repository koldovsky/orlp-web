import { Component, OnInit } from '@angular/core';
import {StartPageService} from "./startPage.service";

import {ORLPService} from "../../orlp.service";
import {Link} from "../../classes/link";
import {CategoryTop} from "../../classes/top.category.DTO";
import {CourseTop} from "../../classes/top.course.DTO";

@Component({
    template: require('app/page/mainPage/startPage.component.html!text')
})

export class StartPageComponent implements OnInit {
    public categories: CategoryTop[];
    public courses: CourseTop[];
    errorMessage: string;

    constructor(private startPageService: StartPageService,
                private orlp: ORLPService) { }

    ngOnInit(): void {
        this.startPageService.getCategories()
            .subscribe(category => this.categories = category,
                        error => this.errorMessage = <any>error);

        this.startPageService.getCourses()
            .subscribe(course => this.courses = course,
                error => this.errorMessage = <any>error);
    }

    getCategoryLink(link : Link) : string {
        return this.orlp.getShortLink(link);
    }

    getCourseLink(link : Link) : string {
        return this.orlp.getShortLink(link);
    }
}