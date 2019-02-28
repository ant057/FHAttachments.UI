
import {of as observableOf,  Observable } from 'rxjs';
// angular
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/subject';
import { map, tap, catchError, debounceTime, startWith, distinctUntilChanged, switchMap } from 'rxjs/operators';


// models
import { ClaimSearch } from '../models/claimSearch';
import { FHAttachmentsError } from '../models/fhAttachmentsError';

// services
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-claim-search',
  templateUrl: './claim-search.component.html',
  styleUrls: ['./claim-search.component.css']
})
export class ClaimSearchComponent implements OnInit {

  private claimSearchSubj = new Subject<string>();
  $claimSearches: Observable<ClaimSearch[] | FHAttachmentsError>;
  private claimHistSubj = new Subject<string>();
  claimHistory: string[] = [];
  @Output() claimEventEmitter = new EventEmitter<string>();
  matLineItem: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.processSearchTerm();
    this.processHistoryTerm();
  }

  // Push a search term into the observable stream.
  searchClaim(event: any): void {
    if (event.target.value !== '') {
      this.claimSearchSubj.next(event.target.value);
    }
  }

  processSearchTerm() {
    this.$claimSearches = this.claimSearchSubj
     .pipe(
       debounceTime(200),        // wait for 300ms pause in events
       distinctUntilChanged(),   // ignore if next search term is same as previous
       switchMap(term => term   // switch to new observable each time
           // return the http search observable
           ? this.dataService.getClaims(term)
           // or the observable of empty claims if no search term
           : observableOf<ClaimSearch[]>([]))
     );
  }

  selectClaim(claimNumber: string) {
    this.claimHistSubj.next(claimNumber);
    this.claimEventEmitter.emit(claimNumber);
  }

  processHistoryTerm() {
    this.claimHistSubj.subscribe(
      x => this.claimHistory.push(x),
      err => console.log(err)
    );
  }

}
