import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMatchesResultsComponent } from './dashboard-matches-results.component';

describe('MslDashboardMatchesResultsComponent', () => {
    let component: DashboardMatchesResultsComponent;
    let fixture: ComponentFixture<DashboardMatchesResultsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardMatchesResultsComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardMatchesResultsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
