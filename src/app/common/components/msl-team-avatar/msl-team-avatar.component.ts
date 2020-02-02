import { Component, Input, OnInit } from '@angular/core';
import { Sizes } from '../../types/sizes';

@Component({
    selector: 'msl-team-avatar',
    templateUrl: './msl-team-avatar.component.html',
    styleUrls: ['./msl-team-avatar.component.scss'],
})
export class MslTeamAvatarComponent implements OnInit {

    @Input()
    img?: string;

    @Input()
    description?: string;

    @Input()
    size: Sizes = 'small';

    constructor() {
    }

    ngOnInit() {
    }

}
