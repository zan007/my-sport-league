import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../types/result';

@Component({
    selector: 'msl-team-results-trend',
    templateUrl: './team-results-trend.component.html',
    styleUrls: ['./team-results-trend.component.scss'],
})
export class TeamResultsTrendComponent implements OnInit {
    @Input()
    teamResults: Result[] = [];

    @Input()
    trendCount = 5;

    resultsTrend: Result[];

    constructor() {}

    ngOnInit() {
        this.resultsTrend = this.countResultTrend();
        console.log(this.teamResults);
    }

    countResultTrend() {
        return this.teamResults.slice(0, this.trendCount);
    }
}
