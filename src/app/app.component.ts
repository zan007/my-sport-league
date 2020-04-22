import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavigationItem } from '@common/types/navigation-item';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'my-sport-league';

    menuItems: Observable<NavigationItem[]>;

    constructor() {}

    ngOnInit() {
        this.menuItems = of([
            {
                title: 'first',
                routerLink: '/first',
            },
            {
                title: 'second',
                routerLink: '/second',
            },
            {
                title: 'third',
                routerLink: '/third',
            },
            {
                title: 'fourth',
                routerLink: '/fourth',
            },
        ]);
    }
}
