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
 /* animations: [
    trigger('fade', [
      state('inactive', style({ opacity: 0.2 })),
      state('active', style({ opacity: 1 })),
      transition('* <=> *', [
       animate(200)
      ])
    ])
  ]*/
})
export class ClaimDetailComponent implements OnInit {

  @Input() claim: ClaimDetail | FHAttachmentsError;

  constructor() { }

  ngOnInit() {
    
  }

}
