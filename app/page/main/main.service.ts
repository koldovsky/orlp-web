import { Injectable } from '@angular/core';
import {Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {ORLPService} from "../../orlp.service";
import {CategoryTop} from "../../classes/CategoryDTO/top.category.DTO";
import {DTOConverter} from "../../classes/dto.Converter";
import {CourseTop} from "../../classes/CourseDTO/top.course.DTO";

@Injectable()
export class MainService {

    constructor(private orlp : ORLPService) { }

    getCategories() : Observable<CategoryTop[]> {
        return this.orlp.get('api/category/top/')
            .map((response: Response) => <CategoryTop[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToTopCategory, response.json()))
            .catch(this.handleError);
    }

    getCourses() : Observable<CourseTop[]> {
        return this.orlp.get('api/course/top/')
            .map((response: Response) => <CourseTop[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToTopCourse, response.json()))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}
