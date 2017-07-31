import {Component, OnInit} from "@angular/core";
import {CategoriesPublic} from "../../../classes/CategoryDTO/public.categories";
import {UserCategoriesService} from "./user.categories.service";
import {ORLPService} from "../../../orlp.service";
import {Link} from "../../../classes/link";

@Component({
    selector: "user-all-categories",
    providers:[UserCategoriesService],
    template: require('app/page/user/categories/user.categories.component.html!text')
})
export class UserCategoriesComponent implements OnInit{

    categories: CategoriesPublic[];
    errorMessage: string;
    listFilter: string;

    constructor(private userCategoriesService: UserCategoriesService, private orlpService: ORLPService){}

    ngOnInit(): void {
        this.userCategoriesService.getCategories()
            .subscribe(categories => this.categories = categories,
                error => this.errorMessage = <any>error);
    }

    getCategoryLink(link: Link): string {
        return this.orlpService.getShortLink(link);
    }

}
