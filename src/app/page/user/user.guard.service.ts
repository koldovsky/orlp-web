import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from '../authentication/authentication.service';

@Injectable()
export class UserGuardService implements CanActivate {

  constructor(private router: Router, private authentication: AuthenticationService) {
  }

  canActivate(): boolean {
    if (this.authentication.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
