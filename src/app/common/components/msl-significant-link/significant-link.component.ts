import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'msl-significant-link',
    templateUrl: './significant-link.component.html',
    styleUrls: ['./significant-link.component.scss'],
})
export class SignificantLinkComponent implements OnInit {
    @Input()
    text: string;

    constructor() {}

    ngOnInit() {}
}
