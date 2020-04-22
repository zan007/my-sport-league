import { createReducer, on } from '@ngrx/store';
import { AuthStep } from '../models/auth-step';
import { logInByCif, logInByPassword } from './auth.actions';

interface InitialAuthState {
    isLoggedIn: boolean;
    step: AuthStep | undefined;
}

const initialAuthState: InitialAuthState = {
    isLoggedIn: false,
    step: undefined,
};

export const authReducer = createReducer(
    initialAuthState,
    on(logInByCif, (state, action) => {
        return {
            ...state,
            step: {
                state: 'PASSWORD',
            },
        };
    }),
    on(logInByPassword, (state, action) => {
        return {
            ...state,
            step: {
                state: 'SUCCESS',
            },
        };
    })
);
