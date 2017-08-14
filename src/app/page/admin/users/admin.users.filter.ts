import {PipeTransform, Pipe} from '@angular/core';
import {AdminUsers} from '../../../dto/AdminDTO/admin.user.DTO';

@Pipe({
  name: 'usersFilter'
})
export class AdminUsersPipe implements PipeTransform {

  transform(value: AdminUsers[], filterBy: string): AdminUsers[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((users: AdminUsers) =>
      users.email.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }
}
