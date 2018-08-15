import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { map, tap, catchError, switchMap } from 'rxjs/operators';

// Models
import { Book } from '../models/book';
import { OldBook } from '../models/oldBook';
import { ClaimSearch } from '../models/claimSearch';
import { ClaimDetail } from '../models/claimDetail';
import { FHAttachmentsError } from '../models/FHAttachmentsError';

@Injectable()
export class DataService {
  private apiUrlBase: string = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/books');
  }

  getAllBooksError(): Observable<Book[] | FHAttachmentsError> {
    return this.http.get<Book[]>('/api/errors/500')
      .pipe(
        catchError(err => this.handleHttpError(err))
      );
  }

  getClaims(claimNumber: string): Observable<ClaimSearch[] | FHAttachmentsError> {
    return this.http.get<ClaimSearch[]>(this.apiUrlBase + `claims/${claimNumber}`)
      .pipe(
        map((claims: any) => claims.recordset as ClaimSearch[]),
        catchError(err => this.handleHttpError(err))
      );
  }

  getClaim(claimNumber: string): Observable<ClaimDetail | FHAttachmentsError> {
    return this.http.get<ClaimDetail>(this.apiUrlBase + `claim/${claimNumber}`)
      .pipe(
        map((claim: any) => claim.recordset[0] as ClaimDetail),
        catchError(err => this.handleHttpError(err))
      );
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`/api/books/${id}`, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'my-token'
      })
    });
  }

  getOldBookById(id: number): Observable<OldBook> {
    return this.http.get<Book>(`/api/books/${id}`)
      .pipe(
        map(b => <OldBook> {
            bookTitle: b.title,
            year: b.publicationYear
          }),
        tap(classicBook => console.log(classicBook))
      );
  }

  addBook( newbook: Book): Observable<Book> {
    return this.http.post<Book>('/api/books', newbook, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateBook( updatedBook: Book): Observable<void> {
    return this.http.put<void>(`/api/books/${updatedBook.bookID}`, updatedBook, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteBook(bookID: number): Observable<void> {
    return this.http.delete<void>(`/api/books/${bookID}`);
  }

  handleHttpError(error: HttpErrorResponse): Observable<FHAttachmentsError> {
    const dataError = new FHAttachmentsError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occurred retrieving data.';
    return ErrorObservable.create(dataError);
  }

}
