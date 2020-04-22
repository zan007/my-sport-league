import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InternalComponent } from './internal.component';
import { StoreModule } from '@ngrx/store';
import { internalReducer } from './store/internal-reducer';
import { CommonModule } from '@common/common-module';
import { InternalRoutingModule } from './internal-routing.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: InternalComponent,
            },
        ]),
        StoreModule.forFeature('internal', internalReducer),
        CommonModule,
        InternalRoutingModule,
        DashboardModule,
    ],
    declarations: [InternalComponent],
    exports: [InternalComponent],
    providers: [],
})
export class InternalModule {}
