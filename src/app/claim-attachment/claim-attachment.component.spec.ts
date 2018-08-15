import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimAttachmentComponent } from './claim-attachment.component';

describe('ClaimAttachmentComponent', () => {
  let component: ClaimAttachmentComponent;
  let fixture: ComponentFixture<ClaimAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
