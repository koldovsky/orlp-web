import { OnInit } from '@angular/core';
import { StartPageService } from "./startPage.service";
import { ORLPService } from "../../orlp.service";
import { Link } from "../../classes/link";
import { CategoryTop } from "../../classes/top.category.DTO";
export declare class StartPageComponent implements OnInit {
    private startPageService;
    private orlp;
    categories: CategoryTop[];
    errorMessage: string;
    constructor(startPageService: StartPageService, orlp: ORLPService);
    ngOnInit(): void;
    getCategoryLink(link: Link): string;
}
