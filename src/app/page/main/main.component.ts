import {Component, OnInit} from '@angular/core';
import {MainService} from './main.service';

import {ORLPService} from '../../services/orlp.service';
import {Link} from '../../dto/link';
import {CategoryTop} from '../../dto/CategoryDTO/top.category.DTO';
import {CourseTop} from '../../dto/CourseDTO/top.course.DTO';

@Component({
  templateUrl: ('./main.component.html'),
  styleUrls: ['./main.css']
})

export class MainComponent implements OnInit {
  public categories: CategoryTop[];
  public courses: CourseTop[];
  errorMessage: string;

  constructor(private mainService: MainService,
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

