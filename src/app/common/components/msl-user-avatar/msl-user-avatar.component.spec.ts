import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MslUserAvatarComponent } from './msl-user-avatar.component';

describe('MslUserAvatarComponent', () => {
  let component: MslUserAvatarComponent;
  let fixture: ComponentFixture<MslUserAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MslUserAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MslUserAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
