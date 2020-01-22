import {createAction, props} from '@ngrx/store';

export const logInByCif = createAction('[External Cif] - Log in by CIF', props<{cif: string}>());

export const logInByPassword = createAction('[External Password] - Log in by Password', props<{password: string}>());
