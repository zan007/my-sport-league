import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamResultsTrendComponent } from './team-results-trend.component';

describe('MslTeamResultsTrendComponent', () => {
    let component: TeamResultsTrendComponent;
    let fixture: ComponentFixture<TeamResultsTrendComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TeamResultsTrendComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TeamResultsTrendComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
