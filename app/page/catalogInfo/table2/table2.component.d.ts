import { OnInit } from '@angular/core';
import { Table2Service } from "./table2.service";
import { IDeck } from "../../../interfaces/deck";
export declare class Table2Component implements OnInit {
    private table2Service;
    decks: IDeck[];
    errorMessage: string;
    id: number;
    constructor(table2Service: Table2Service);
    ngOnInit(): void;
}
