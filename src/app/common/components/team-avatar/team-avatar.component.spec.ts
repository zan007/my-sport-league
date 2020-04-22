import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAvatarComponent } from './team-avatar.component';

describe('MslTeamAvatarComponent', () => {
    let component: TeamAvatarComponent;
    let fixture: ComponentFixture<TeamAvatarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TeamAvatarComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TeamAvatarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
