import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MslMatchesAgendaComponent } from './msl-matches-agenda.component';

describe('MslMatchesAgendaComponent', () => {
  let component: MslMatchesAgendaComponent;
  let fixture: ComponentFixture<MslMatchesAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MslMatchesAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MslMatchesAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
