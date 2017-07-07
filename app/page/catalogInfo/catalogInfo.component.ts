import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
    template: require('app/page/catalogInfo/catalogInfo.component.html!text')
})
export class CategoryInfoComponent implements OnInit {
    id: number;
    private sub: Subscription;
    table1 : boolean = true;
    table2 : boolean = false;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.id = id;
            }
        );
    }

    tabClick(id : number) {
        if(id == 0) {
            this.table1 = true;
            this.table2 = false;
        } else {
            this.table2 = true;
            this.table1 = false;
        }
    }
}