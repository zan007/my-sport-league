import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchOfTheDayComponent } from './match-of-the-day.component';

describe('MslMatchOfTheDayComponent', () => {
    let component: MatchOfTheDayComponent;
    let fixture: ComponentFixture<MatchOfTheDayComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MatchOfTheDayComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MatchOfTheDayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
