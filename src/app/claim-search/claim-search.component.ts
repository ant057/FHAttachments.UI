import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/observable';
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

  private searchTerms = new Subject<string>();
  claimSearches: Observable<ClaimSearch[]>;
  private show: boolean = false;
  claimHistory: Observable<ClaimSearch[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.processSearchTerm();
  }

  // Push a search term into the observable stream.
  search(event: any): void {
    if (event.target.value !== '') {
      this.searchTerms.next(event.target.value);
    }
  }

  selectClaim(event: any){
    //
  }

  processSearchTerm() {
    this.claimSearches = this.searchTerms
     .pipe(
       debounceTime(200),        // wait for 300ms pause in events
       distinctUntilChanged(),   // ignore if next search term is same as previous
       tap(result => console.log('im here')),
       switchMap(term => term   // switch to new observable each time
           // return the http search observable
           ? this.dataService.getClaims(term)
           // or the observable of empty claims if no search term
           : Observable.of<ClaimSearch[]>([]))
     );
  }

}
