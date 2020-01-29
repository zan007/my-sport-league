import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MslDashboardLeaguesTableComponent } from './msl-dashboard-leagues-table.component';

describe('MslDashboardLeaguesTableComponent', () => {
  let component: MslDashboardLeaguesTableComponent;
  let fixture: ComponentFixture<MslDashboardLeaguesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MslDashboardLeaguesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MslDashboardLeaguesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
