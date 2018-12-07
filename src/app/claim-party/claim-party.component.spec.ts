import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimPartyComponent } from './claim-party.component';

describe('ClaimPartyComponent', () => {
  let component: ClaimPartyComponent;
  let fixture: ComponentFixture<ClaimPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
