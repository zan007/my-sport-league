import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MslFooterComponent } from './msl-footer.component';

describe('MslFooterComponent', () => {
  let component: MslFooterComponent;
  let fixture: ComponentFixture<MslFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MslFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MslFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
