import {ActionReducerMap} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';
import {uiReducer} from './ui/ui-reducer';

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  ui: uiReducer
};
