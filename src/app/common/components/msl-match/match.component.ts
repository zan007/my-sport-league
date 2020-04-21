import { Component, Input, OnInit } from '@angular/core';
import { MatchData } from '../../types/match-data';
import { Sizes } from '../../types/sizes';

@Component({
    selector: 'msl-match',
    templateUrl: './match.component.html',
    styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
    @Input()
    matchData: MatchData;

    @Input()
    matchDate?: string;

    @Input()
    teamAvatarSize?: Sizes = 'small';

    constructor() {}

    ngOnInit() {}
}
