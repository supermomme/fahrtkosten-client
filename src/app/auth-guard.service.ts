import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from './api.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private api: ApiService,
    private router: Router
  ) {
  }

  canActivate() {
    return this.api.app.authenticate().then((user) => {
      return true;
    })
    .catch((err) => {
      console.log(err)
      this.router.navigate(['login']);
      return false;
    })
  }
  logout() {
    this.api.app.logout().then(() => {
    })
  }
}
