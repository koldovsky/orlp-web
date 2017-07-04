import {Component, Input, OnInit} from '@angular/core';
import {Table2Service} from "./table2.service";
import {IDeck} from "../../../interfaces/deck";

@Component({
    selector: 'table2',
    template: require('./table2.component.html!text')
})
export class Table2Component implements OnInit {

    decks: IDeck[];
    errorMessage: string;
    @Input() id: number;

    constructor(private table2Service: Table2Service) {
    }

    ngOnInit(): void {
        this.table2Service.getDeck(this.id)
            .subscribe(decks => this.decks = decks,
                        error => this.errorMessage = <any>error);
    }

}