import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMatchesAgendaComponent } from './dashboard-matches-agenda.component';

describe('MslDashboardMatchesAgendaComponent', () => {
    let component: DashboardMatchesAgendaComponent;
    let fixture: ComponentFixture<DashboardMatchesAgendaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardMatchesAgendaComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardMatchesAgendaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
