import { OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ORLPService } from "../../services/orlp.service";
import { CategoryLink } from "../../dto/CategoryDTO/link.category.DTO";
import { CategoryInfoService } from "./categoryInfo.service";
export declare class CategoryInfoComponent implements OnInit {
    private route;
    private orlp;
    private categoryService;
    private url;
    category: CategoryLink;
    private sub;
    private errorMessage;
    table1: boolean;
    table2: boolean;
    constructor(route: ActivatedRoute, orlp: ORLPService, categoryService: CategoryInfoService);
    ngOnInit(): void;
    private takeCategory();
    private decodeLink();
    tabClick(id: number): void;
    getLinkForCourses(): string;
    getLinkForDecks(): string;
}
