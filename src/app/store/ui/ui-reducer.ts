import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../app-reducer';
import { RoutingReducer } from './routing/routing.reducer';

export const uiReducer: ActionReducerMap<AppState> = {
    ui: {
        routing: RoutingReducer,

        //TODO: Add menu reducer
        //menu: MenuReducer,
    }
};
