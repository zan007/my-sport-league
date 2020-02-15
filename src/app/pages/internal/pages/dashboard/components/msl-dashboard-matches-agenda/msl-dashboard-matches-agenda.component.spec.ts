import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MslDashboardMatchesAgendaComponent } from './msl-dashboard-matches-agenda.component';

describe('MslDashboardMatchesAgendaComponent', () => {
  let component: MslDashboardMatchesAgendaComponent;
  let fixture: ComponentFixture<MslDashboardMatchesAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MslDashboardMatchesAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MslDashboardMatchesAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
