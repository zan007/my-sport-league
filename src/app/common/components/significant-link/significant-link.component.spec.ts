import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignificantLinkComponent } from './significant-link.component';

describe('MslSignificantLinkComponent', () => {
    let component: SignificantLinkComponent;
    let fixture: ComponentFixture<SignificantLinkComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignificantLinkComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SignificantLinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
