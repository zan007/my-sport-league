import { NgModule } from '@angular/core';
import { AuthModule } from './pages/auth/auth.module';
import { ExternalComponent } from './external.component';
import { ExternalRoutingModule } from './external-routing.module';
import { CommonModule } from '@common/common-module';

@NgModule({
    imports: [AuthModule, ExternalRoutingModule, CommonModule],
    declarations: [ExternalComponent],
    exports: [ExternalComponent],
    providers: [],
})
export class ExternalModule {}
