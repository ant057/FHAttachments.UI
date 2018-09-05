// angular
import { Component, OnInit, Input } from '@angular/core';

// rxjs
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/subject';
import { map, tap, catchError, debounceTime, startWith, distinctUntilChanged, switchMap } from 'rxjs/operators';

// models
import { FHAttachmentsError } from '../models/fhAttachmentsError';

// services
import { DataService } from '../core/data.service';
import { ClaimDetail } from '../models/claimDetail';
import { ClaimAttachment } from '../models/claimAttachment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoading: boolean = false;
  claim: ClaimDetail | FHAttachmentsError;
  claimAttachments: Observable<ClaimAttachment[] | FHAttachmentsError>;
  claimSubj = new Subject<string>();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //this.getClaimDetail();
  }

  selectClaim(claimNumber: string) {
    this.isLoading = true;
    //this.dataService.getClaim(claimNumber).toPromise().then(c => this.claim = c);
    //this.claimSubj.next(claimNumber);
    this.claimAttachments = this.dataService.getClaimAttachments(claimNumber);
    //this.dataService.getClaim(claimNumber);
    const newDS = this;
    setTimeout(function() { newDS.dataService.getClaim(claimNumber).toPromise().then(c => newDS.claim = c); }, 3000);

    this.isLoading = false;
  }

  getClaimDetail() {
    this.claimSubj.subscribe(
      x => this.dataService.getClaim(x)
            .pipe(
              map(c => this.claim = c)
            ),
      err => console.log(err)
    );
  }

}

/*
const mouseMoves = fromEvent(document, 'mousemove');

const subscription = mouseMoves.subscribe(
  (evnt: MouseEvent) => { console.log(`Coords: ${evnt.clientX} X ${evnt.clientX} Y`); }
);

addBook() {
    this.dataService.addBook(new Book())
      .subscribe(
        (data: Book) => console.log(data),
        err => console.log(err)
      );
  }

  this.dataService.getAllBooks()
      .subscribe(
        (data: Book[]) => this.allBooks = data,
        (err: any) => console.error(err.friendlyMessage),
        () => console.log('This is done.')
      );

    const bookID = this.bookID;
    this.dataService.getBookById(bookID)
      .subscribe(
        (data: Book) => this.book = data,
        (err: any) => console.log(err),
        () => console.log('This is done.')
    );

    this.dataService.getOldBookById(bookID)
    .subscribe(
      (data: OldBook) => console.log(`Old book title: ${data.bookTitle}`)
    );

*/

