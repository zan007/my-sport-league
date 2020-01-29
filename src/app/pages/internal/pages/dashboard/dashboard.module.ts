import { NgModule } from '@angular/core';
import { CommonModule as CommonAngularModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MslMatchOfTheDayComponent } from './components/msl-match-of-the-day/msl-match-of-the-day.component';
import { CommonModule } from '../../../../common/common-module';
import { MslDashboardLeaguesTableComponent } from './components/msl-dashboard-leagues-table/msl-dashboard-leagues-table.component';


@NgModule({
    declarations: [
        DashboardComponent,
        MslMatchOfTheDayComponent,
        MslDashboardLeaguesTableComponent,
    ],
    imports: [
        CommonAngularModule,
        CommonModule,
    ]
})
export class DashboardModule { }
