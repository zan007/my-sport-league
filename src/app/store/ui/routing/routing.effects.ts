import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as routingActions from './routing.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class RoutingEffects {
    goToPage$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(routingActions.goToPage),
                map(action => {
                    this.router.navigate([action.page], { ...action.options });

                    return action;
                })
            ),
        { dispatch: false }
    );

    constructor(private actions$: Actions, private router: Router) {}
}
