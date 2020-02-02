import { Team } from './team';
import { Result } from './result';

export interface MatchData {
    [id: string]: {
        team: Team;
        result?: Result;
    };
}
