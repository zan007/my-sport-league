import { Component, Input, OnInit } from '@angular/core';
import { ButtonTypes } from '../../types/button-types';

@Component({
    selector: 'msl-button-primary',
    templateUrl: './msl-button-primary.component.html',
    styleUrls: ['./msl-button-primary.component.scss'],
})
export class MslButtonPrimaryComponent implements OnInit {

    @Input()
    public buttonType: ButtonTypes = 'button';
    @Input()
    public isDisabled = false;

    constructor() {
    }

    ngOnInit() {
    }
}
