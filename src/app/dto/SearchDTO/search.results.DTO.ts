import {CourseSearchDTO} from './course.search.DTO';
import {CategorySearchDTO} from './category.search.DTO';
import {DeckSearchDTO} from './deck.search.DTO';

export class SearchResults {
 public courses: CourseSearchDTO[];
 public categories: CategorySearchDTO[];
 public decks: DeckSearchDTO[];

 constructor(courses?: CourseSearchDTO[], categories?: CategorySearchDTO[], decks?: DeckSearchDTO[]) {
   this.categories = categories;
   this.courses = courses;
   this.decks = decks;
 }
}
