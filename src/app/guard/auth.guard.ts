import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../main-services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  subscribeAdmin;
  
  constructor(private auth: AuthService ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.getAdminAuth();
  }
}
