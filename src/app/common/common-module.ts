import { NgModule } from '@angular/core';
import { CommonModule as CommonAngularModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { MslButtonPrimaryComponent } from './components/msl-button-primary/msl-button-primary.component';
import { MslButtonSecondaryComponent } from './components/msl-button-secondary/msl-button-secondary.component';
import { MslMainHeaderComponent } from './components/msl-main-header/msl-main-header.component';
import { MslUserAvatarComponent } from './components/msl-user-avatar/msl-user-avatar.component';
import { MslLeagueTableComponent } from './components/msl-league-table/msl-league-table.component';
import { MslChevronComponent } from './components/msl-chevron/msl-chevron.component';
import { MslTeamAvatarComponent } from './components/msl-team-avatar/msl-team-avatar.component';


const commonComponents = [
    MslButtonPrimaryComponent,
    MslButtonSecondaryComponent,
    MslMainHeaderComponent,
    MslUserAvatarComponent,
    MslLeagueTableComponent,
    MslChevronComponent,
    MslTeamAvatarComponent,
];
const commonPipes = [];
const commonServices = [
    ApiService,
];


@NgModule({
    imports: [CommonAngularModule],
    declarations: [
        ...commonComponents,
        ...commonPipes,
    ],
    exports: [
        ...commonComponents,
        ...commonPipes,
        CommonAngularModule,
    ],
    providers: [
        ...commonServices,
    ],
})
export class CommonModule implements NgModule {
}
