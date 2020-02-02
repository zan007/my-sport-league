import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'msl-match-of-the-day',
    templateUrl: './msl-match-of-the-day.component.html',
    styleUrls: ['./msl-match-of-the-day.component.scss'],
})
export class MslMatchOfTheDayComponent implements OnInit {

    todayMatches: any;
    leagues: any;
    todayLeagueMatches: any;

    constructor() {
    }

    ngOnInit() {
        // get leagues from service
        this.leagues = [{
            id: '1',
            name: 'Testers League',
        }];

        // get today matchaes for every league
        this.todayMatches = [{
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
        }];
        this.todayLeagueMatches = [
            {
                league: {
                    id: '1',
                    name: 'Testers League',
                },
                matches: [{
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
                }],
            },
        ];
    }
}
