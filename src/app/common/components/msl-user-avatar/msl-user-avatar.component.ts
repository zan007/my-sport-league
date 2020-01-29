import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'msl-user-avatar',
    templateUrl: './msl-user-avatar.component.html',
    styleUrls: ['./msl-user-avatar.component.scss'],
})
export class MslUserAvatarComponent implements OnInit {

    @Input()
    img?: string;

    @Input()
    description?: string;

    constructor() {
    }

    ngOnInit() {
    }

}
