// angular
import { Component, OnInit, Input } from '@angular/core';

// rxjs
import { fromEvent ,  Observable } from 'rxjs';
import { Subject } from 'rxjs/subject';
import { map, tap, catchError, debounceTime, startWith, distinctUntilChanged, switchMap } from 'rxjs/operators';

// models
import { FHAttachmentsError } from '../models/fhAttachmentsError';
import { ClaimDetail } from '../models/claimDetail';
import { ClaimAttachment } from '../models/claimAttachment';

// services
import { DataService } from '../core/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoading: boolean = false;
  claim$: Observable<ClaimDetail | FHAttachmentsError>;
  claimAttachments$: Observable<ClaimAttachment[] | FHAttachmentsError>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  selectClaim(claimNumber: string) {
    this.isLoading = true;
    this.claim$ = this.dataService.getClaim(claimNumber);
    this.claimAttachments$ = this.dataService.getClaimAttachments(claimNumber);

    // const newDS = this;
    // workaround. node needs a second to finish previous call..
    // setTimeout(function() { this.claim$ = newDS.dataService.getClaim(claimNumber); }, 100);

    this.isLoading = false;
  }

}

