import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MslMainHeaderComponent } from './msl-main-header.component';

describe('MslMainHeaderComponent', () => {
  let component: MslMainHeaderComponent;
  let fixture: ComponentFixture<MslMainHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MslMainHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MslMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
