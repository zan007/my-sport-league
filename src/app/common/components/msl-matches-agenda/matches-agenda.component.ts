import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'msl-matches-agenda',
    templateUrl: './matches-agenda.component.html',
    styleUrls: ['./matches-agenda.component.scss'],
})
export class MatchesAgendaComponent implements OnInit {
    @Input()
    limitTo?: number;

    leagues: any;

    constructor() {}

    ngOnInit() {
        this.leagues = [
            {
                name: 'Testers League',
                groups: [
                    {
                        name: 'Grupa 1',
                        matches: [
                            {
                                date: '11.25.2020',
                                matchData: {
                                    1: {
                                        team: {
                                            name: 'Sharks',
                                            logoUrl:
                                                'https://owlsports.com/images/logos/Husky_.png',
                                        },
                                    },
                                    2: {
                                        team: {
                                            name: 'Ducks',
                                            logoUrl:
                                                'https://cdn.bleacherreport.net/images/team_logos/328x328/maine.png',
                                        },
                                    },
                                },
                            },
                            {
                                date: '01.22.2020',
                                matchData: {
                                    1: {
                                        team: {
                                            name: 'Sharks',
                                            logoUrl:
                                                'https://owlsports.com/images/logos/Husky_.png',
                                        },
                                    },
                                    2: {
                                        team: {
                                            name: 'Ducks',
                                            logoUrl:
                                                'https://cdn.bleacherreport.net/images/team_logos/328x328/maine.png',
                                        },
                                    },
                                },
                            },
                            {
                                date: '01.25.2020',
                                matchData: {
                                    1: {
                                        team: {
                                            name: 'Sharks',
                                            logoUrl:
                                                'https://owlsports.com/images/logos/Husky_.png',
                                        },
                                    },
                                    2: {
                                        team: {
                                            name: 'Ducks',
                                            logoUrl:
                                                'https://cdn.bleacherreport.net/images/team_logos/328x328/maine.png',
                                        },
                                    },
                                },
                            },
                        ],
                    },
                ],
            },
        ];
    }
}
