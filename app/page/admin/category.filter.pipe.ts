import { PipeTransform,Pipe } from "@angular/core"

import { ICategoryForAdmin } from "../../interfaces/category-for-admin"


@Pipe({
    name: "categoryFilter"
})
export class CategoryFilterPipe implements PipeTransform{

    transform(value: ICategoryForAdmin[], filterBy: string): ICategoryForAdmin[]{
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((category: ICategoryForAdmin) =>
        category.categoryName.toLocaleLowerCase().indexOf(filterBy) !== -1): value;
    }
}