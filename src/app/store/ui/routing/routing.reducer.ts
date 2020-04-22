import { createReducer, on } from '@ngrx/store';
import * as routingActions from './routing.actions';

export interface RoutingState {
    currentPage: string;
}

const initialRoutingState: RoutingState = {
    currentPage: '',
};

export const RoutingReducer = createReducer(
    initialRoutingState,
    on(routingActions.goToPage, (state, action) => {
        return {
            ...state,
            currentPage: action.page,
        };
    })
);
