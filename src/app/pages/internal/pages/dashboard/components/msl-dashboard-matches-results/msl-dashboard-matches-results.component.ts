import { Component, OnInit } from '@angular/core';
import { Match } from '../../../../../../common/types/match';

@Component({
    selector: 'msl-dashboard-matches-results',
    templateUrl: './msl-dashboard-matches-results.component.html',
    styleUrls: ['./msl-dashboard-matches-results.component.scss'],
})
export class MslDashboardMatchesResultsComponent implements OnInit {

    matches: Match[];
    leagues: any;

    constructor() {
    }

    ngOnInit() {
        this.leagues = [{
            name: 'Testers League',
            groups: [
                {
                    name: 'Grupa 1',
                    matches: [{
                        date: '01.11.2020',
                        matchData: {
                            1: {
                                team: {
                                    name: 'Sharks',
                                    logoUrl: 'https://owlsports.com/images/logos/Husky_.png',
                                },
                                result: {
                                    id: 1,
                                    type: 'WIN',
                                    score: '1',
                                },
                            },
                            2: {
                                team: {
                                    name: 'Ducks',
                                    logoUrl: 'https://cdn.bleacherreport.net/images/team_logos/328x328/maine.png',
                                },
                                result: {
                                    id: 1,
                                    type: 'LOSE',
                                    score: '0',
                                },
                            },
                        },
                    }, {
                        date: '01.22.2020',
                        matchData: {
                            1: {
                                team: {
                                    name: 'Sharks',
                                    logoUrl: 'https://owlsports.com/images/logos/Husky_.png',
                                },
                                result: {
                                    id: 1,
                                    type: 'WIN',
                                    score: '10',
                                },
                            },
                            2: {
                                team: {
                                    name: 'Ducks',
                                    logoUrl: 'https://cdn.bleacherreport.net/images/team_logos/328x328/maine.png',
                                },
                                result: {
                                    id: 1,
                                    type: 'LOSE',
                                    score: '0',

                                },
                            },
                        },
                    }, {
                        date: '01.25.2020',
                        matchData: {
                            1: {
                                team: {
                                    name: 'Sharks',
                                    logoUrl: 'https://owlsports.com/images/logos/Husky_.png',
                                },
                            },
                            2: {
                                team: {
                                    name: 'Ducks',
                                    logoUrl: 'https://cdn.bleacherreport.net/images/team_logos/328x328/maine.png',
                                },
                            },
                        },
                    }],
                },
            ],
        }];
    }

}
