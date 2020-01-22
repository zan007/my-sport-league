import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AppState} from '../../../../../../../../store/app-reducer';
import {Store} from '@ngrx/store';
import * as AuthActions from '../../../../store/auth.actions';

@Component({
  selector: 'password',
  templateUrl: './password.html'
})
export class PasswordComponent {
  form: FormGroup;

  constructor (private router: Router, private formBuilder: FormBuilder, private store: Store<AppState>) {

    this.form = this.formBuilder.group({
      password: ['', [Validators.required]]
    })
  }

  login () {
    const {password} = this.form.value;

    this.store.dispatch(AuthActions.logInByPassword({password}));
    //this.router.navigateByUrl('/internal');
    //this.apiService.post('/login', {cif})
  }
}
