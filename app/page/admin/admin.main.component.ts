import {Component, OnInit} from '@angular/core';
import {AdminMainService} from "./admin.main.service";

@Component({
    providers: [AdminMainService],
    template: require('app/page/admin/admin.main.component.html!text'),
    styleUrls: ["bootstrap/styles-for-card-page.css"]
})

export class AdminMainComponent implements OnInit {

    constructor(private adminMainService: AdminMainService) {
    }

    ngOnInit(): void {
    }

}