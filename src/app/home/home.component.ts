import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { Book } from '../models/book';

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
    this.dataService.getAllBooks()
      .subscribe(
        (data: Book[]) => this.allBooks = data,
        (err: any) => console.log(err),
        () => console.log('This is done.')
      );

    let bookID = this.bookID;
    this.dataService.getBookById(bookID)
      .subscribe(
        (data: Book) => this.book = data,
        (err: any) => console.log(err),
        () => console.log('This is done.')
    );
  }

}
