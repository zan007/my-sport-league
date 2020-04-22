import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AuthActions from './auth.actions';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import * as routingActions from '../../../../../store/ui/routing/routing.actions';
import { AppState } from '@store/app-reducer';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthEffects {
    logInByCifEffect$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(AuthActions.logInByCif),
                tap(action => {
                    return this.authService.authPrepare(action.cif).subscribe(
                        data => {
                            console.log('success');
                            switch (data.state) {
                                case 'CIF':
                                    this.store.dispatch(
                                        routingActions.goToPage({
                                            page: '/cif',
                                        })
                                    );
                                    break;
                                case 'PASSWORD':
                                    this.store.dispatch(
                                        routingActions.goToPage({
                                            page: '/sign-in/password',
                                        })
                                    );
                                    break;
                            }

                            return data;
                        },
                        data => {
                            console.log('error');

                            return data;
                        }
                    );
                })
            );
        },
        { dispatch: false }
    );

    loginByPasswordEffect$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(AuthActions.logInByPassword),
                tap(action => {
                    return this.authService
                        .authPassword(action.password)
                        .subscribe(
                            data => {
                                console.log('success');
                                switch (data.state) {
                                    case 'SUCCESS':
                                        this.store.dispatch(
                                            routingActions.goToPage({
                                                page: '/internal',
                                            })
                                        );
                                }

                                return data;
                            },
                            data => {
                                console.log('error');

                                return data;
                            }
                        );
                })
            );
        },
        { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private store: Store<AppState>,
        private activeRoute: ActivatedRoute
    ) {}
}
