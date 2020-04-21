import { Component, Input, OnInit } from '@angular/core';
import { ButtonTypes } from '../../types/button-types';

@Component({
    selector: 'msl-button-secondary',
    templateUrl: './button-secondary.component.html',
    styleUrls: ['./button-secondary.component.scss'],
})
export class ButtonSecondaryComponent implements OnInit {
    @Input()
    public buttonType: ButtonTypes = 'button';
    @Input()
    public isDisabled = false;
    @Input()
    public withBorder = false;

    constructor() {}

    ngOnInit() {}
}
