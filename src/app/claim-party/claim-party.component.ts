// angular
import { Component, OnInit, Input, OnChanges } from '@angular/core';

// 3rd party
import { bounce, jello } from 'ng-animate';

// models
import { ClaimParty } from '../models/claimParty';
import { FHAttachmentsError } from '../models/fhAttachmentsError';

//rxjs
import { Observable } from 'rxjs/Observable';

import { DataService } from '../core/data.service';

@Component({
  selector: 'app-claim-party',
  templateUrl: './claim-party.component.html',
  styleUrls: ['./claim-party.component.css']
})
export class ClaimPartyComponent implements OnInit, OnChanges {

  claimParties: Observable<ClaimParty[] | FHAttachmentsError>;
  @Input() claimNumber: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.claimParties = this.dataService.getClaimParties(this.claimNumber);
  }

  ngOnChanges() {
    this.claimParties = this.dataService.getClaimParties(this.claimNumber);
  }

}
