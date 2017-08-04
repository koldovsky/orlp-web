import { OnInit } from "@angular/core";
import { CategoriesPublic } from "../../../dto/CategoryDTO/public.categories";
import { UserCategoriesService } from "./user.categories.service";
import { ORLPService } from "../../../services/orlp.service";
import { Link } from "../../../dto/link";
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
