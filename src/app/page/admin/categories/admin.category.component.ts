import {Component, OnInit} from '@angular/core';
import {AdminCategoryService} from './admin.category.service';
import {CategoriesPublic} from '../../../dto/CategoryDTO/public.categories';
import {ORLPService} from '../../../services/orlp.service';

@Component({
    selector: 'app-admin-all-category',
    providers: [AdminCategoryService],
    templateUrl: ('./admin.category.component.html'),
    styleUrls: ['../admin.style.css']
})

export class AdminCategoryComponent implements OnInit {
    categories: CategoriesPublic[];
    errorMessage: string;
    listFilter: string;

    constructor(private adminCategoryService: AdminCategoryService, private orlpService: ORLPService) {
    }

    ngOnInit(): void {
        this.adminCategoryService.getCatalogs()
            .subscribe(categories => this.categories = categories,
                error => this.errorMessage = <any>error);
    }
}
