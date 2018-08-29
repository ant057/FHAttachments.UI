// angular
import { Component, OnInit, Input } from '@angular/core';

// rxjs
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Observable } from 'rxjs/Observable';
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
  claim: Observable<ClaimDetail | FHAttachmentsError>;
  claimAttachments: Observable<ClaimAttachment[] | FHAttachmentsError>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  selectClaim(claimNumber: string) {
    this.isLoading = true;
    this.claim = this.dataService.getClaim(claimNumber);
    this.claimAttachments = this.dataService.getClaimAttachments(claimNumber);

    this.isLoading = false;
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

