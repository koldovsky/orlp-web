import { OnInit } from "@angular/core";
import { CategoriesPublic } from "../../../classes/CategoryDTO/public.categories";
import { UserCategoriesService } from "./user.categories.service";
import { ORLPService } from "../../../orlp.service";
import { Link } from "../../../classes/link";
export declare class UserCategoriesComponent implements OnInit {
    private userCategoriesService;
    private orlpService;
    categories: CategoriesPublic[];
    errorMessage: string;
    listFilter: string;
    constructor(userCategoriesService: UserCategoriesService, orlpService: ORLPService);
    ngOnInit(): void;
    getCategoryLink(link: Link): string;
}
