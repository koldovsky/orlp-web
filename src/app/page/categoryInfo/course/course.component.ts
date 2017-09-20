import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from './course.service';
import {ORLPService} from '../../../services/orlp.service';
import {CourseLink} from '../../../dto/CourseDTO/link.course.DTO';
import {DeckPublic} from '../../../dto/DeckDTO/public.deck.DTO';
import {LogoutService} from '../../logout/logout.service';
import {IStarRatingOnClickEvent} from "angular-star-rating/star-rating-struct";

@Component({
  selector: 'app-course-table',
  templateUrl: ('./course.component.html'),
  styleUrls: ['.././categoryInfo.css']
})

export class CourseComponent implements OnInit {
  public courses: CourseLink[];
  public decks: DeckPublic[];
  public clickedCourse: any;
  public isAuthorized: boolean;
  @Input() url: string;

  constructor(private courseService: CourseService,
              private orlpService: ORLPService,
              private logoutService: LogoutService) {
  }


  ngOnInit(): void {
    this.url = this.orlpService.decodeLink(this.url);
    this.courseService.getCourse(this.url)
      .subscribe(courses => this.courses = courses);
    this.isAuthorized = this.logoutService.isAuthorized();
  }

  onRatingClick = (course: CourseLink, event:IStarRatingOnClickEvent) => {
    course.rating = event.rating;
    this.courseService.addCourseRating(course);
  }

  getDecks(course: CourseLink) {
    this.courseService.getDecks(course.decks)
      .subscribe(decks => this.decks = decks);
  }

  showDecks(course: CourseLink) {
    this.getDecks(course);
    this.clickedCourse = (this.clickedCourse === course.name) ? false : course.name;
  }
}
