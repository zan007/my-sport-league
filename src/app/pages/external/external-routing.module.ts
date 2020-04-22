import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { ExternalComponent } from './external.component';

const routes: Routes = [
    {
        path: '',
        component: ExternalComponent,
        children: [
            {
                path: '',
                component: AuthComponent,
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: '/sign-in',
                    },
                    {
                        path: 'sign-in',
                        children: [
                            {
                                path: '',
                                loadChildren: () =>
                                    import(
                                        './pages/auth/pages/sign-in/sign-in.module'
                                    ).then(view => view.SignInModule),
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExternalRoutingModule {}
