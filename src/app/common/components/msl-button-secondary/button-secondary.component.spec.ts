import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSecondaryComponent } from './button-secondary.component';

describe('MslButtonComponent', () => {
    let component: ButtonSecondaryComponent;
    let fixture: ComponentFixture<ButtonSecondaryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ButtonSecondaryComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonSecondaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
