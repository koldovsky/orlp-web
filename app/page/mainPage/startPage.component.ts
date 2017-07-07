import { Component, OnInit } from '@angular/core';
import {StartPageService} from "./startPage.service";

import {error} from "util";
import {ICategory} from "../../interfaces/category";

@Component({
    template: require('app/page/mainPage/startPage.component.html!text')
})

export class StartPageComponent implements OnInit {
    categories: ICategory[];
    errorMessage: string;

    constructor(private startPageService: StartPageService) { }

    ngOnInit(): void {
        this.startPageService.getCategories()
            .subscribe(category => this.categories = category,
                        error => this.errorMessage = <any>error);
    }
}