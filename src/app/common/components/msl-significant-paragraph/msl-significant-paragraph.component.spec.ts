import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MslSignificantParagraphComponent } from './msl-significant-paragraph.component';

describe('MslSignificantParagraphComponent', () => {
  let component: MslSignificantParagraphComponent;
  let fixture: ComponentFixture<MslSignificantParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MslSignificantParagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MslSignificantParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
