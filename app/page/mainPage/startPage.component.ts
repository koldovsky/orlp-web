import { Component, OnInit } from '@angular/core';
import {StartPageService} from "./startPage.service";
import {ICatalog} from "../../interfaces/catalogs";
import {error} from "util";

@Component({
    template: require('app/page/mainPage/startPage.component.html!text')
})

export class StartPageComponent implements OnInit {
    catalogs: ICatalog[];
    errorMessage: string;

    constructor(private startPageService: StartPageService) { }

    ngOnInit(): void {
        this.startPageService.getCatalogs()
            .subscribe(catalogs => this.catalogs = catalogs,
                        error => this.errorMessage = <any>error);
    }
}