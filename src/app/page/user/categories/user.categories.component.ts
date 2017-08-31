import {Component, OnInit} from '@angular/core';
import {CategoriesPublic} from '../../../dto/CategoryDTO/public.categories';
import {UserCategoriesService} from './user.categories.service';
import {ORLPService} from '../../../services/orlp.service';
import {Link} from '../../../dto/link';

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

  constructor(private userCategoriesService: UserCategoriesService,
              private orlpService: ORLPService) {
  }

  ngOnInit(): void {
    this.userCategoriesService.getCategories()
      .subscribe(categories => this.categories = categories,
        error => this.errorMessage = <any>error);
  }

  getCategoryLink(link: Link): string {
    return this.orlpService.getShortLink(link);
  }

}
