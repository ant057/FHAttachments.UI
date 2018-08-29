// angular
import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { trigger, transition, useAnimation, state, style, animate } from '@angular/animations';

// 3rd party
import { bounce, jello } from 'ng-animate';

// models
import { ClaimDetail } from '../models/claimDetail';
import { FHAttachmentsError } from '../models/fhAttachmentsError';
import { ClaimAttachment } from '../models/claimAttachment';

// rxjs
import { Observable } from 'rxjs/Observable';
import { map, tap, catchError, debounceTime, startWith, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { DataService } from '../core/data.service';
import { windowTime } from 'rxjs/operators';

@Component({
  selector: 'app-claim-attachment',
  templateUrl: './claim-attachment.component.html',
  styleUrls: ['./claim-attachment.component.css']
})
export class ClaimAttachmentComponent implements OnInit {
  
  @Input() claimAttachments: Observable<ClaimAttachment[] | FHAttachmentsError>;
  matLineItem: any;

  constructor(private dataService: DataService) { }

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

  downloadAttachment() {
    console.log('i got clicked');
    const blob = this.dataService.getClaimAttachment('007300000000028').subscribe(data => { window.URL.createObjectURL(data); });
    console.log(blob);
    //const url = window.URL.createObjectURL(blob);

    //window.URL.revokeObjectURL(url);
  }

}
