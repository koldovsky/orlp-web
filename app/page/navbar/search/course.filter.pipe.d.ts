import { PipeTransform } from "@angular/core";
import { CourseLink } from "../../../classes/CourseDTO/link.course.DTO";
export declare class CourseFilterPipe implements PipeTransform {
    transform(value: CourseLink[], filterBy: string): CourseLink[];
}
