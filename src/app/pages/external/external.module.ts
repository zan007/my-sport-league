import {NgModule} from '@angular/core';
import {AuthModule} from './pages/auth/auth.module';
import {ExternalComponent} from './external.component';
import {ExternalRoutingModule} from './external-routing.module';

@NgModule ({
  imports: [
    AuthModule,
    ExternalRoutingModule
  ],
  declarations: [ExternalComponent],
  exports: [
    ExternalComponent
  ],
  providers: []
})
export class ExternalModule {
}
