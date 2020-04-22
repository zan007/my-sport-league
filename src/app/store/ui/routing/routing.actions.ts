import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

interface GoToPageProps {
    page: string;
    options?: NavigationExtras;
}

export const goToPage = createAction(
    '[Router] - Change page',
    props<GoToPageProps>()
);
