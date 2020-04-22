import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./pages/external/external.module').then(
                view => view.ExternalModule
            ),
    },
    {
        path: 'internal',
        loadChildren: () =>
            import('./pages/internal/internal.module').then(
                view => view.InternalModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
