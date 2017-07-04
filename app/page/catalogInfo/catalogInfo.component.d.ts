import { OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
export declare class CatalogInfoComponent implements OnInit {
    private route;
    id: number;
    private sub;
    constructor(route: ActivatedRoute);
    ngOnInit(): void;
}
