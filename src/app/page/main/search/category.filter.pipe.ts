import {PipeTransform, Pipe} from "@angular/core"
import {CategoryLink} from "../../../dto/CategoryDTO/link.category.DTO";

@Pipe({
  name: "categoryFilter"
})

export class CategoryFilterPipe implements PipeTransform {
  transform(value: CategoryLink[], filterBy: string): CategoryLink[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

    return filterBy ? value.filter((category: CategoryLink) =>
      category.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }
}
