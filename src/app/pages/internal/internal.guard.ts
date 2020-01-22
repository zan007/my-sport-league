import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AppState} from '../../store/app-reducer';

@Injectable ()
export class InternalGuard implements CanActivate {
  constructor(store: AppState) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return ;
  }
}
