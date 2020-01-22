import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {InternalComponent} from './internal.component';
import {StoreModule} from '@ngrx/store';
import {internalReducer} from './store/internal-reducer';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      component: InternalComponent
    }
    ]),
    StoreModule.forFeature('internal', internalReducer)
  ],
  declarations: [InternalComponent],
  exports: [InternalComponent],
  providers: []
})
export class InternalModule {
}
