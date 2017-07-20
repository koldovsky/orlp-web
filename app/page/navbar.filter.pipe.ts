import {Pipe, PipeTransform} from "@angular/core";
import {CoursePublic} from "../classes/public.course.DTO";

@Pipe ({
    name: "courseFilter"
})

export class NavbarFilterPipe implements PipeTransform {
    transform(value: CoursePublic[], filterBy: string): CoursePublic[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((course: CoursePublic) =>
        course.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}