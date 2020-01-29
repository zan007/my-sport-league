import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MslTeamAvatarComponent } from './msl-team-avatar.component';

describe('MslTeamAvatarComponent', () => {
  let component: MslTeamAvatarComponent;
  let fixture: ComponentFixture<MslTeamAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MslTeamAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MslTeamAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
