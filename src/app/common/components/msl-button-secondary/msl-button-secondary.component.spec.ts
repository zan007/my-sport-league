import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MslButtonSecondaryComponent } from './msl-button-secondary.component';

describe('MslButtonComponent', () => {
    let component: MslButtonSecondaryComponent;
    let fixture: ComponentFixture<MslButtonSecondaryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MslButtonSecondaryComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MslButtonSecondaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
