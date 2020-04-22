import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '@store/app-reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class InternalGuard implements CanActivate {
    constructor(private store: Store<AppState>) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return;
    }
}
