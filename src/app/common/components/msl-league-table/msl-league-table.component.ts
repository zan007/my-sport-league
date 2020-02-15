import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'msl-league-table',
    templateUrl: './msl-league-table.component.html',
    styleUrls: ['./msl-league-table.component.scss'],
})
export class MslLeagueTableComponent implements OnInit {

    @Input()
    limitTo?: number;

    leagues: any = {};

    constructor() {
    }

    ngOnInit() {
        this.leagues = [
            {
                name: 'Testers League',
                groups: [
                    {
                        name: 'Grupa 1',
                        results: [{
                            position: '1',
                            team: {
                                name: 'Bears',
                                logoUrl: 'https://logodix.com/logo/930651.png'
                            },
                            matchesCount: 3,
                            wins: 2,
                            loses: 1,
                            draws: 0,
                            points: 6,
                            trend: 'UP',
                            lastMatches: [
                                {
                                    id: '1',
                                    type: 'WIN'
                                }, {
                                    id: '2',
                                    type: 'WIN'
                                }, {
                                    id: '3',
                                    type: 'LOSE'
                                }
                            ]
                        }, {
                            position: '2',
                            team: {
                                name: 'Sharks',
                                logoUrl: 'https://owlsports.com/images/logos/Husky_.png'
                            },
                            matchesCount: 3,
                            wins: 1,
                            loses: 2,
                            draws: 0,
                            points: 3,
                            trend: 'STABLE',
                            lastMatches: [
                                {
                                    id: '4',
                                    type: 'LOSE'
                                }, {
                                    id: '5',
                                    type: 'WIN'
                                }, {
                                    id: '6',
                                    type: 'LOSE'
                                }
                            ]
                        }, {
                            position: '3',
                            team: {
                                name: 'Ducks',
                                logoUrl: 'https://cdn.bleacherreport.net/images/team_logos/328x328/maine.png'
                            },
                            matchesCount: 3,
                            wins: 0,
                            loses: 2,
                            draws: 1,
                            points: 0,
                            trend: 'DOWN',
                            lastMatches: [
                                {
                                    id: '7',
                                    type: 'LOSE',
                                }, {
                                    id: '8',
                                    type: 'DRAW'
                                }, {
                                    id: '9',
                                    type: 'LOSE'
                                }
                            ]
                        }]
                    }
                ]
            }
        ];
    }


}
