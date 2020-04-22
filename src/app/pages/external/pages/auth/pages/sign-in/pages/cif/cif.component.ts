import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppState } from '@store/app-reducer';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../../../store/auth.actions';

@Component({
    selector: 'cif',
    templateUrl: './cif.html',
})
export class CifComponent {
    form: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private store: Store<AppState>
    ) {
        console.log('cif controller');
        this.form = this.formBuilder.group({
            cif: ['', [Validators.required]],
        });
    }

    login() {
        const { cif } = this.form.value;

        this.store.dispatch(AuthActions.logInByCif({ cif }));
        //this.router.navigateByUrl('/internal');
        //this.apiService.post('/login', {cif})
    }
}
