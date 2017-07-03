import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
    template: require('app/page/catalogInfo/catalogInfo.component.html!text')
})
export class CatalogInfoComponent implements OnInit {
    id: number;
    private sub: Subscription;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.id = id;
            }
        );
    }
}