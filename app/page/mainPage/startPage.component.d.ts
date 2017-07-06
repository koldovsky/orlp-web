import { OnInit } from '@angular/core';
import { StartPageService } from "./startPage.service";
import { ICategory } from "../../interfaces/category";
export declare class StartPageComponent implements OnInit {
    private startPageService;
    categories: ICategory[];
    errorMessage: string;
    constructor(startPageService: StartPageService);
    ngOnInit(): void;
}
