import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from './course.service';
import {ORLPService} from '../../../services/orlp.service';
import {CourseLink} from '../../../dto/CourseDTO/link.course.DTO';
import {DeckPublic} from '../../../dto/DeckDTO/public.deck.DTO';

@Component({
  selector: 'app-course-table',
  templateUrl: ('./course.component.html'),
  styleUrls: ['.././categoryInfo.css']
})

export class CourseComponent implements OnInit {
  public courses: CourseLink[];
  public decks: DeckPublic[];
  public clickedCourse: any;
  @Input() url: string;

  constructor(private courseService: CourseService,
              private orlpService: ORLPService) {
  }

  ngOnInit(): void {
    this.url = this.orlpService.decodeLink(this.url);
    this.courseService.getCourse(this.url)
      .subscribe(courses => this.courses = courses);
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
