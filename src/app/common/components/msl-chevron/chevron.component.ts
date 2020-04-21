import { Component, Input, OnInit } from '@angular/core';
import { Sizes } from '../../types/sizes';

@Component({
    selector: 'msl-chevron',
    templateUrl: './chevron.component.html',
    styleUrls: ['./chevron.component.scss'],
})
export class ChevronComponent implements OnInit {
    @Input()
    type: 'up' | 'down';

    @Input()
    color: 'red' | 'green' | 'grey' = 'grey';

    @Input()
    size: Sizes = 'medium';

    constructor() {}

    ngOnInit() {}
}
