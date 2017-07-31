import {PipeTransform, Pipe} from "@angular/core"
import {CategoriesPublic} from "../../../classes/CategoryDTO/public.categories";

@Pipe({
    name: "categoryFilter"
})
export class AdminCategoryPipe implements PipeTransform {

    transform(value: CategoriesPublic[], filterBy: string): CategoriesPublic[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((category: CategoriesPublic) =>
        category.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}