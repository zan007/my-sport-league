import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CifComponent} from './pages/cif/cif.component';
import {PasswordComponent} from './pages/password/password.component';
import {SignInComponent} from './sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
    children: [
      {
        path: '',
        component: CifComponent
      }, {
        path: 'password',
        component: PasswordComponent
      }
    ]
  }
];

@NgModule ({
  imports: [RouterModule.forChild (routes)],
  exports: [RouterModule]
})
export class SignInRoutingModule {
}
