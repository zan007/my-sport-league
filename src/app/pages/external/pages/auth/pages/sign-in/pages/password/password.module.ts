import { NgModule } from '@angular/core';
import { PasswordComponent } from './password.component';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [PasswordComponent],
    imports: [AngularCommonModule, ReactiveFormsModule],
    exports: [],
})
export class PasswordModule {
    constructor() {
        console.log('passwrod module');
    }
}
