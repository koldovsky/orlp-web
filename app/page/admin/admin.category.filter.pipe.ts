import {PipeTransform, Pipe} from "@angular/core"
import {ICategory} from "../../interfaces/category";

@Pipe({
    name: "categoryFilter"
})
export class AdminCategoryPipe implements PipeTransform {

    transform(value: ICategory[], filterBy: string): ICategory[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((category: ICategory) =>
        category.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}