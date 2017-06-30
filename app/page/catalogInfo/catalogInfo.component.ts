import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
    template: `<div style="color: white">HELLO {{id}}</div>`
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