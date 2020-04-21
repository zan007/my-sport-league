import { Component, Input, OnInit } from '@angular/core';
import { ButtonTypes } from '../../types/button-types';

@Component({
    selector: 'msl-button-primary',
    templateUrl: './button-primary.component.html',
    styleUrls: ['./button-primary.component.scss'],
})
export class ButtonPrimaryComponent implements OnInit {
    @Input()
    public buttonType: ButtonTypes = 'button';
    @Input()
    public isDisabled = false;
    constructor() {}

    ngOnInit() {}
}
