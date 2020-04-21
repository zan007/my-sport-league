import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPrimaryComponent } from './button-primary.component';

describe('MslButtonComponent', () => {
    let component: ButtonPrimaryComponent;
    let fixture: ComponentFixture<ButtonPrimaryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ButtonPrimaryComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonPrimaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
