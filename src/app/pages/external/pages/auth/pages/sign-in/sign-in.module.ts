import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in.component';
import { CifModule } from './pages/cif/cif.module';
import { PasswordModule } from './pages/password/password.module';
import { SignInRoutingModule } from './sign-in-routing.module';

@NgModule({
    imports: [CifModule, PasswordModule, SignInRoutingModule],
    declarations: [SignInComponent],
    exports: [SignInComponent],
    providers: [],
})
export class SignInModule {
    constructor() {
        console.log('sign in module');
    }
}
