import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class UserGuardService implements CanActivate {
  isAuthorised: boolean;

  constructor(private router: Router) {
  }

  canActivate(): boolean {
    if (this.isAuthorised) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
