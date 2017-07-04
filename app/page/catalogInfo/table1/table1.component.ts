import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from "../../../interfaces/course";
import {Table1Service} from "./table1.service";

@Component({
    selector: 'table1',
    template: require('./table1.component.html!text')
})
export class Table1Component implements OnInit {
    courses: ICourse[];
    errorMessage: string;
    @Input() id: number;

    constructor(private table1Service: Table1Service) {
    }

    ngOnInit(): void {
        this.table1Service.getCourse(this.id)
            .subscribe(courses => this.courses = courses,
                error => this.errorMessage = <any>error);
    }
}