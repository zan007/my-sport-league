import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'msl-user-avatar',
    templateUrl: './user-avatar.component.html',
    styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit {
    @Input()
    img?: string;

    @Input()
    description?: string;

    constructor() {}

    ngOnInit() {}
}
