import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';

import {ORLPService} from '../../services/orlp.service';
import {Link} from '../../dto/link';
import {CategoryTop} from '../../dto/CategoryDTO/top.category.DTO';
import {CourseTop} from '../../dto/CourseDTO/top.course.DTO';

@Component({
  templateUrl: ('./home.component.html'),
  styleUrls: ['./home.css']
})

export class HomeComponent implements OnInit {
  public categories: CategoryTop[];
  public courses: CourseTop[];
  errorMessage: string;

  constructor(private mainService: HomeService,
              private orlp: ORLPService) {
  }

  ngOnInit(): void {
    this.mainService.getCategories()
      .subscribe(category => this.categories = category,
        error => this.errorMessage = <any>error);

    this.mainService.getCourses()
      .subscribe(course => this.courses = course,
        error => this.errorMessage = <any>error);
  }

  getCategoryLink(link: Link): string {
    return this.orlp.getShortLink(link);
  }

  getCourseLink(link: Link): string {
    return this.orlp.getShortLink(link);
  }
}
