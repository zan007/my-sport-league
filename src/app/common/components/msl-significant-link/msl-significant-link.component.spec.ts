import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MslSignificantLinkComponent } from './msl-significant-link.component';

describe('MslSignificantLinkComponent', () => {
  let component: MslSignificantLinkComponent;
  let fixture: ComponentFixture<MslSignificantLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MslSignificantLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MslSignificantLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
