import { OnInit } from '@angular/core';
import { StartPageService } from "./startPage.service";
import { ICatalog } from "../../interfaces/catalogs";
export declare class StartPageComponent implements OnInit {
    private startPageService;
    catalogs: ICatalog[];
    errorMessage: string;
    constructor(startPageService: StartPageService);
    ngOnInit(): void;
}
