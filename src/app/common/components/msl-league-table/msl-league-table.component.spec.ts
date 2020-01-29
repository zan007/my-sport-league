import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MslLeagueTableComponent } from './msl-league-table.component';

describe('MslResultTableComponent', () => {
  let component: MslLeagueTableComponent;
  let fixture: ComponentFixture<MslLeagueTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MslLeagueTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MslLeagueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
