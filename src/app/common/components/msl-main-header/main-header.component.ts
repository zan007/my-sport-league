import { Component, Input, OnInit } from '@angular/core';
import { NavigationItem } from '../../types/navigation-item';
import { Observable } from 'rxjs';

@Component({
    selector: 'msl-main-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
    @Input()
    public navigationItems: Observable<NavigationItem[]>;

    constructor() {}

    ngOnInit() {
        console.log(this.navigationItems);
    }
}
