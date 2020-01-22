import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './store/app-reducer';
import { environment } from '../environments/environment';
import { ApiService } from './common/services/api.service';
import { CommonModule } from './common/common-module';
import { RoutingEffects } from './store/ui/routing/routing.effects';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
            },
        }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
            routerState: RouterState.Minimal,
        }),
        EffectsModule.forRoot([
            RoutingEffects,
        ]),
    ],
    providers: [
        ApiService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
