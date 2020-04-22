import { NgModule } from '@angular/core';
import { CommonModule as CommonAngularModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatchOfTheDayComponent } from './components/match-of-the-day/match-of-the-day.component';
import { CommonModule } from '@common/common-module';
import { DashboardLeaguesTableComponent } from './components/dashboard-leagues-table/dashboard-leagues-table.component';
import { DashboardMatchesResultsComponent } from './components/dashboard-matches-results/dashboard-matches-results.component';
import { DashboardMatchesAgendaComponent } from './components/dashboard-matches-agenda/dashboard-matches-agenda.component';

@NgModule({
    declarations: [
        DashboardComponent,
        MatchOfTheDayComponent,
        DashboardLeaguesTableComponent,
        DashboardMatchesResultsComponent,
        DashboardMatchesAgendaComponent,
    ],
    imports: [CommonAngularModule, CommonModule],
})
export class DashboardModule {}
