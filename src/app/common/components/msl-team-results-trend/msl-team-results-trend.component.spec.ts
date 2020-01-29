import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MslTeamResultsTrendComponent } from './msl-team-results-trend.component';

describe('MslTeamResultsTrendComponent', () => {
  let component: MslTeamResultsTrendComponent;
  let fixture: ComponentFixture<MslTeamResultsTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MslTeamResultsTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MslTeamResultsTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
