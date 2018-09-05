import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { trigger, transition, useAnimation, state, style, animate } from '@angular/animations';
import { bounce, jello } from 'ng-animate';
import { ClaimDetail } from '../models/claimDetail';
import { Observable } from 'rxjs/Observable';
import { FHAttachmentsError } from '../models/fhAttachmentsError';

@Component({
  selector: 'app-claim-detail',
  templateUrl: './claim-detail.component.html',
  styleUrls: ['./claim-detail.component.css']
})
export class ClaimDetailComponent implements OnInit {

  @Input() claim: Observable<ClaimDetail | FHAttachmentsError>;

  constructor() { }

  ngOnInit() {
    //this.claim.subscribe((data: ClaimDetail) => this.claimDetail.fh_claim_num = data.fh_claim_num);
  }

}
