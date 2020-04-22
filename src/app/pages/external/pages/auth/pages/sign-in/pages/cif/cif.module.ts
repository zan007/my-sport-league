import { NgModule } from '@angular/core';
import { CifComponent } from './cif.component';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [CifComponent],
    imports: [AngularCommonModule, ReactiveFormsModule],
    exports: [],
})
export class CifModule {
    constructor() {
        console.log('cif module');
    }
}
