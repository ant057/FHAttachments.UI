import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimDropComponent } from './claim-drop.component';

describe('ClaimDropComponent', () => {
  let component: ClaimDropComponent;
  let fixture: ComponentFixture<ClaimDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
