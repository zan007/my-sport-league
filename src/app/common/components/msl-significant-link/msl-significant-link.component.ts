import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'msl-significant-link',
    templateUrl: './msl-significant-link.component.html',
    styleUrls: ['./msl-significant-link.component.scss'],
})
export class MslSignificantLinkComponent implements OnInit {

    @Input()
    text: string;

    constructor() {
    }

    ngOnInit() {
    }

}
