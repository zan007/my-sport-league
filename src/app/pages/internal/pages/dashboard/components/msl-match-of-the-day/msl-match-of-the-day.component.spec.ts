import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MslMatchOfTheDayComponent } from './msl-match-of-the-day.component';

describe('MslMatchOfTheDayComponent', () => {
  let component: MslMatchOfTheDayComponent;
  let fixture: ComponentFixture<MslMatchOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MslMatchOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MslMatchOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
