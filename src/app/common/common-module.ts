import { NgModule } from '@angular/core';
import { CommonModule as CommonAngularModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from './components/button-secondary/button-secondary.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { LeagueTableComponent } from './components/league-table/league-table.component';
import { ChevronComponent } from './components/chevron/chevron.component';
import { TeamAvatarComponent } from './components/team-avatar/team-avatar.component';
import { TeamResultsTrendComponent } from './components/team-results-trend/team-results-trend.component';
import { SignificantLinkComponent } from './components/significant-link/significant-link.component';
import { MatchComponent } from './components/match/match.component';
import { MatchesAgendaComponent } from './components/matches-agenda/matches-agenda.component';
import { SignificantParagraphComponent } from './components/significant-paragraph/significant-paragraph.component';
import { FooterComponent } from './components/footer/footer.component';
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
