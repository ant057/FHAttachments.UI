// angular
import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { trigger, transition, useAnimation, state, style, animate } from '@angular/animations';
import { environment } from '../../environments/environment';

// 3rd party
import { bounce, jello } from 'ng-animate';

// models
import { ClaimDetail } from '../models/claimDetail';
import { FHAttachmentsError } from '../models/fhAttachmentsError';
import { ClaimAttachment } from '../models/claimAttachment';

// rxjs
import { Observable } from 'rxjs';
import { map, tap, catchError, debounceTime, startWith, distinctUntilChanged, switchMap, windowTime } from 'rxjs/operators';

// core
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-claim-attachment',
  templateUrl: './claim-attachment.component.html',
  styleUrls: ['./claim-attachment.component.css']
})
export class ClaimAttachmentComponent implements OnInit {

  @Input() claimAttachments: ClaimAttachment[];
  matLineItem: any;
  apiurl: string = environment.fhattachmentsapi;

  constructor(private dataService: DataService) { }

  ngOnInit() {
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
