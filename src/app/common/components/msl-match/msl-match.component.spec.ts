import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MslMatchComponent } from './msl-match.component';

describe('MslMatchComponent', () => {
  let component: MslMatchComponent;
  let fixture: ComponentFixture<MslMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MslMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MslMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
