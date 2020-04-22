import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignificantParagraphComponent } from './significant-paragraph.component';

describe('MslSignificantParagraphComponent', () => {
    let component: SignificantParagraphComponent;
    let fixture: ComponentFixture<SignificantParagraphComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignificantParagraphComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SignificantParagraphComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
