import { Component, Input, OnInit } from '@angular/core';
import { ButtonTypes } from '../../types/button-types';

@Component({
    selector: 'msl-button-secondary',
    templateUrl: './msl-button-secondary.component.html',
    styleUrls: ['./msl-button-secondary.component.scss'],
})
export class MslButtonSecondaryComponent implements OnInit {

    @Input()
    public buttonType: ButtonTypes = 'button';
    @Input()
    public isDisabled = false;
    @Input()
    public withBorder = false;

    constructor() {
    }

    ngOnInit() {
    }
}
