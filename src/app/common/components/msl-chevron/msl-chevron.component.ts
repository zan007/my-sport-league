import { Component, Input, OnInit } from '@angular/core';
import { Sizes } from '../../types/sizes';

@Component({
    selector: 'msl-chevron',
    templateUrl: './msl-chevron.component.html',
    styleUrls: ['./msl-chevron.component.scss'],
})
export class MslChevronComponent implements OnInit {

    @Input()
    type: 'up' | 'down';

    @Input()
    color: 'red' | 'green' | 'grey' = 'grey';

    @Input()
    size: Sizes = 'medium';

    constructor() {
    }

    ngOnInit() {
    }

}
