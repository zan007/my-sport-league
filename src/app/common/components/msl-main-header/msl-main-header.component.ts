import { Component, Input, OnInit } from '@angular/core';
import { NavigationItem } from '../../types/navigation-item';
import { Observable } from 'rxjs';

@Component({
    selector: 'msl-main-header',
    templateUrl: './msl-main-header.component.html',
    styleUrls: ['./msl-main-header.component.scss']
})
export class MslMainHeaderComponent implements OnInit {

    @Input()
    public navigationItems: Observable<NavigationItem[]>;

    constructor() { }

    ngOnInit() {
        console.log(this.navigationItems)
    }

}
