import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {StarRatingModule} from 'angular-star-rating';
import {SearchComponent} from './search.component';
import {SearchService} from './search.service';
import {HighlightPipe} from './highlight.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StarRatingModule,
    RouterModule.forChild([{path: 'search', component: SearchComponent}])
  ],
  declarations: [SearchComponent, HighlightPipe],
  providers: [SearchService]
})
export class SearchModule { }
