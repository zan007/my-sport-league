import { Component, Input, OnInit } from '@angular/core';
import { Sizes } from '../../types/sizes';

@Component({
    selector: 'msl-team-avatar',
    templateUrl: './team-avatar.component.html',
    styleUrls: ['./team-avatar.component.scss'],
})
export class TeamAvatarComponent implements OnInit {
    @Input()
    img?: string;

    @Input()
    description?: string;

    @Input()
    size: Sizes = 'small';

    constructor() {}

    ngOnInit() {}
}
