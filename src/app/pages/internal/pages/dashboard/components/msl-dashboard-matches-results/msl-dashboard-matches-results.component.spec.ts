import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MslDashboardMatchesResultsComponent } from './msl-dashboard-matches-results.component';

describe('MslDashboardMatchesResultsComponent', () => {
  let component: MslDashboardMatchesResultsComponent;
  let fixture: ComponentFixture<MslDashboardMatchesResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MslDashboardMatchesResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MslDashboardMatchesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
