import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MslChevronComponent } from './msl-chevron.component';

describe('MslChevronComponent', () => {
  let component: MslChevronComponent;
  let fixture: ComponentFixture<MslChevronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MslChevronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MslChevronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
