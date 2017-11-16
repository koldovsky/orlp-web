import {Component, OnInit} from '@angular/core';
import {CategoriesPublic} from '../../../dto/CategoryDTO/public.categories';
import {UserCategoriesService} from './user.categories.service';
import {ORLPService} from '../../../services/orlp.service';
import {Link} from '../../../dto/link';
import {TableColumnDTO} from "../../../dto/TableColumnDTO";

@Component({
  selector: 'app-user-all-categories',
  providers: [UserCategoriesService],
  templateUrl: ('./user.categories.component.html'),
  styleUrls: ['./user.categories.style.css']
})
export class UserCategoriesComponent implements OnInit {

  categories: CategoriesPublic[];
  errorMessage: string;
  listFilter: string;
  actionSort = true;
  currentPage = 1;
  lastPage: number;
  categoryColumns: TableColumnDTO[] = [new TableColumnDTO('id', '#', '\u2191'), new TableColumnDTO('name', 'Category Name', '')
    , new TableColumnDTO('description', 'Category Description', '')];
  selectedSortedParam: TableColumnDTO = this.categoryColumns[0];

  constructor(private userCategoriesService: UserCategoriesService,
              private orlpService: ORLPService) {
  }

  ngOnInit(): void {
    this.getCategoriesByPage(this.currentPage);
  }

  public getCategoriesByPage(numberPage: number)  {
    this.userCategoriesService.getCategoriesByPage(numberPage, this.selectedSortedParam.nameColumnParam, this.actionSort)
      .subscribe(category => {
        this.currentPage = numberPage;
        this.lastPage = category.totalPages;
        this.categories = category.categories;
      });
  }
  public sortBy(param: TableColumnDTO) {
    if (param === this.selectedSortedParam) {
      this.actionSort = !this.actionSort;
    }else {
      this.actionSort = true;
      this.selectedSortedParam.symbolSorting = '';
    }
    if (this.actionSort) {
      param.symbolSorting = '\u2191';
    } else {
      param.symbolSorting = '\u2193';
    }

    this.selectedSortedParam = param;
    this.getCategoriesByPage(this.currentPage);
  }
  getCategoryLink(link: Link): string {
    return this.orlpService.getShortLink(link);
  }

}
