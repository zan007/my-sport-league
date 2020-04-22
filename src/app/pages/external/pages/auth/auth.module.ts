import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        StoreModule.forFeature('auth', authReducer),
        EffectsModule.forFeature([AuthEffects]),
        RouterModule,
    ],
    declarations: [AuthComponent],
    exports: [AuthComponent],
    providers: [AuthService],
})
export class AuthModule {
    constructor() {
        console.log('auth module');
    }
}
