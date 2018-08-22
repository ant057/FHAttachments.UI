// angular
import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { trigger, transition, useAnimation, state, style, animate } from '@angular/animations';

// 3rd party
import { bounce, jello } from 'ng-animate';

// models
import { ClaimDetail } from '../models/claimDetail';
import { FHAttachmentsError } from '../models/fhAttachmentsError';
import { ClaimAttachment } from '../models/claimAttachment';

@Component({
  selector: 'app-claim-attachment',
  templateUrl: './claim-attachment.component.html',
  styleUrls: ['./claim-attachment.component.css']
})
export class ClaimAttachmentComponent implements OnInit {

  @Input() claim: ClaimDetail | FHAttachmentsError;
  @Input() claimAttachments: ClaimAttachment[] | FHAttachmentsError;
  matLineItem: any;

  constructor() { }

  ngOnInit() {
  }

  highlightEnter(e) {
    this.matLineItem = e;
    this.highlightMatLineItem('#E8EAF6', 'bold');
  }

  highlightLeave(e) {
    this.matLineItem = e;
    this.highlightMatLineItem(null, 'normal');
  }

  highlightMatLineItem(backgroundColor: string, fontWeight: string) {
    this.matLineItem.target.style.backgroundColor = backgroundColor;
    this.matLineItem.target.style.fontWeight = 700;
  }

  selectAttachmentIcon(filename: string) {
    const ext = filename.substring(filename.lastIndexOf('.') + 1).toLowerCase();
    switch (ext) {
      case 'doc': {
        return 'doc';
      }
      case 'docx': {
        return 'doc';
      }
      case 'msg': {
        return 'msg';
      }
      case 'pdf': {
        return 'pdf';
      }
      case 'xlsx': {
        return 'xls';
      }
      case 'xls': {
        return 'xls';
      }
      default: {
        return 'text';
      }
    }
  }

}
