import { PipeTransform } from "@angular/core";
import { CourseLink } from "../../../dto/CourseDTO/link.course.DTO";
export declare class CourseFilterPipe implements PipeTransform {
    transform(value: CourseLink[], filterBy: string): CourseLink[];
}
