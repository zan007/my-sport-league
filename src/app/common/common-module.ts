import { NgModule } from '@angular/core';
import { CommonModule as CommonAngularModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from './components/msl-button-secondary/button-secondary.component';
import { MainHeaderComponent } from './components/msl-main-header/main-header.component';
import { UserAvatarComponent } from './components/msl-user-avatar/user-avatar.component';
import { LeagueTableComponent } from './components/msl-league-table/league-table.component';
import { ChevronComponent } from './components/msl-chevron/chevron.component';
import { TeamAvatarComponent } from './components/msl-team-avatar/team-avatar.component';
import { TeamResultsTrendComponent } from './components/msl-team-results-trend/team-results-trend.component';
import { SignificantLinkComponent } from './components/msl-significant-link/significant-link.component';
import { MatchComponent } from './components/msl-match/match.component';
import { MatchesAgendaComponent } from './components/msl-matches-agenda/matches-agenda.component';
import { SignificantParagraphComponent } from './components/msl-significant-paragraph/significant-paragraph.component';
import { FooterComponent } from './components/msl-footer/footer.component';
import { DatePipe } from './pipes/date-pipe/date.pipe';

const commonComponents = [
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    MainHeaderComponent,
    UserAvatarComponent,
    LeagueTableComponent,
    ChevronComponent,
    TeamAvatarComponent,
    TeamResultsTrendComponent,
    SignificantLinkComponent,
    MatchComponent,
    MatchesAgendaComponent,
    SignificantParagraphComponent,
    FooterComponent,
];
const commonPipes = [DatePipe];
const commonServices = [ApiService];

@NgModule({
    imports: [CommonAngularModule],
    declarations: [...commonComponents, ...commonPipes],
    exports: [...commonComponents, ...commonPipes, CommonAngularModule],
    providers: [...commonServices],
})
export class CommonModule implements NgModule {}
