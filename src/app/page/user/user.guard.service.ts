import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LogoutService} from '../logout/logout.service';

@Injectable()
export class UserGuardService implements CanActivate {

  constructor(private router: Router, private logoutService: LogoutService) {
  }

  canActivate(): boolean {
    if (this.logoutService.isAuthorized()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
