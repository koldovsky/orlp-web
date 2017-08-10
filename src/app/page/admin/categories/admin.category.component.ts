import {Component, OnInit} from '@angular/core';
import {AdminCategoryService} from './admin.category.service';
import {CategoriesPublic} from '../../../dto/CategoryDTO/public.categories';

@Component({
  providers: [AdminCategoryService],
  templateUrl: ('./admin.category.component.html'),
  styleUrls: ['./admin.category.style.css']
})

export class AdminCategoryComponent implements OnInit {
  categories: CategoriesPublic[];
  listFilter: string;

  constructor(private adminCategoryService: AdminCategoryService) {
  }

  ngOnInit(): void {
    this.adminCategoryService.getCatalogs()
      .subscribe(categories => this.categories = categories);
  }
}
