import { Component, Input, OnInit } from '@angular/core';
import { MatchData } from '../../types/match-data';

@Component({
    selector: 'msl-match',
    templateUrl: './msl-match.component.html',
    styleUrls: ['./msl-match.component.scss'],
})
export class MslMatchComponent implements OnInit {

    @Input()
    matchData: MatchData;

    @Input()
    matchDate?: string;


    constructor() {
    }

    ngOnInit() {

    }

}
