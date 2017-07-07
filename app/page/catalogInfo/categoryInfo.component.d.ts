import { OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
export declare class CategoryInfoComponent implements OnInit {
    private route;
    id: number;
    private sub;
    table1: boolean;
    table2: boolean;
    constructor(route: ActivatedRoute);
    ngOnInit(): void;
    tabClick(id: number): void;
}
