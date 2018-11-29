import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AdminGuardService implements CanActivate {
  isAdmin: boolean;

  constructor(private router: Router) {
  }

  canActivate(): boolean {
    if (this.isAdmin) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
