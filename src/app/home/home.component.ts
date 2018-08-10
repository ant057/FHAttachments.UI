import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { Book } from '../models/book';
import { OldBook } from '../models/oldBook';
import { FHAttachmentsError } from '../models/fhAttachmentsError';

import { fromEvent } from 'rxjs/observable/fromEvent';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allBooks: Book[];
  book: Book;
  bookID: number = 3;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    
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

