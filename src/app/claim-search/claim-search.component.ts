import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/subject';
import { map, tap, catchError, debounceTime, startWith, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { ClaimSearch } from '../models/claimSearch';
import { DataService } from '../core/data.service';
import { FHAttachmentsError } from '../models/FHAttachmentsError';

/**
 * @title Autocomplete overview
 */
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

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.processSearchTerm();
    this.processHistoryTerm();
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
           : Observable.of<ClaimSearch[]>([]))
     );
  }

  // Push a search term into the observable stream.
  search(event: any): void {
    if (event.target.value !== '') {
      this.claimSearchSubj.next(event.target.value);
    }
  }

  selectClaim(claimNumber: string) {
    this.claimHistSubj.next(claimNumber);
  }

  processHistoryTerm() {
    this.claimHistSubj
     .pipe(
      tap(v => console.log(v)),
      map(v => this.claimHistory.push(v))
     );

    this.claimHistSubj.subscribe();
  }

}
