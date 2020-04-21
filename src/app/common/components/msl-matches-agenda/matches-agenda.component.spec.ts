import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesAgendaComponent } from './matches-agenda.component';

describe('MslMatchesAgendaComponent', () => {
    let component: MatchesAgendaComponent;
    let fixture: ComponentFixture<MatchesAgendaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MatchesAgendaComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MatchesAgendaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
