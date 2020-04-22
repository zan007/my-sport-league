import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLeaguesTableComponent } from './dashboard-leagues-table.component';

describe('MslDashboardLeaguesTableComponent', () => {
    let component: DashboardLeaguesTableComponent;
    let fixture: ComponentFixture<DashboardLeaguesTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardLeaguesTableComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardLeaguesTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
