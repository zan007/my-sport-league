import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MslButtonPrimaryComponent } from './msl-button-primary.component';

describe('MslButtonComponent', () => {
    let component: MslButtonPrimaryComponent;
    let fixture: ComponentFixture<MslButtonPrimaryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MslButtonPrimaryComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MslButtonPrimaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
