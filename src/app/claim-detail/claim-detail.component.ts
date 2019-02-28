// angular
import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { trigger, transition, useAnimation, state, style, animate } from '@angular/animations';

// models
import { ClaimDetail } from '../models/claimDetail';
import { FHAttachmentsError } from '../models/fhAttachmentsError';

// rxjs
import { Observable } from 'rxjs';

@Component({
  selector: 'app-claim-detail',
  templateUrl: './claim-detail.component.html',
  styleUrls: ['./claim-detail.component.css']
})
export class ClaimDetailComponent implements OnInit {

  @Input() claim: ClaimDetail | FHAttachmentsError;

  constructor() { }

  ngOnInit() {

  }

}
