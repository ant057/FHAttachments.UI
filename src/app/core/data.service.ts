// angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

// rxjs
import { Observable } from 'rxjs/observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { map, tap, catchError, switchMap } from 'rxjs/operators';

// Models
import { ClaimSearch } from '../models/claimSearch';
import { ClaimDetail } from '../models/claimDetail';
import { FHAttachmentsError } from '../models/fhAttachmentsError';
import { ClaimAttachment } from '../models/claimAttachment';
import { ClaimAttachmentBin } from '../models/claimAttachmentBin';
import { ClaimParty } from '../models/claimParty';

@Injectable()
export class DataService {
  private apiUrl: string = 'http://' + environment.fhattachmentsapi + '/api/';

  constructor(private http: HttpClient) { }

  getClaims(claimNumber: string): Observable<ClaimSearch[] | FHAttachmentsError> {
    console.log(this.apiUrl + `claims/${claimNumber}`);
    return this.http.get<ClaimSearch[]>(this.apiUrl + `claims/${claimNumber}`)
      .pipe(
        map((claims: any) => claims.recordset as ClaimSearch[]),
        catchError(err => this.handleHttpError(err))
      );
  }

  getClaim(claimNumber: string): Observable<ClaimDetail | FHAttachmentsError> {
    return this.http.get<ClaimDetail>(this.apiUrl + `claim/${claimNumber}`)
      .pipe(
        map((claim: any) => claim.recordset[0] as ClaimDetail),
        catchError(err => this.handleHttpError(err))
      );
  }

  getClaimParties(claimNumber: string): Observable<ClaimParty[] | FHAttachmentsError> {
    return this.http.get<ClaimParty[]>(this.apiUrl + `claimparties/${claimNumber}`)
      .pipe(
        map((claims: any) => claims.recordset as ClaimParty[]),
        catchError(err => this.handleHttpError(err))
      );
  }

  getClaimAttachments(claimNumber: string): Observable<ClaimAttachment[] | FHAttachmentsError> {
    return this.http.get<ClaimAttachment[]>(this.apiUrl + `claimattachments/${claimNumber}`)
      .pipe(
        map((claim: any) => claim.recordset as ClaimAttachment[]),
        catchError(err => this.handleHttpError(err))
      );
  }

  handleHttpError(error: HttpErrorResponse): Observable<FHAttachmentsError> {
    const dataError = new FHAttachmentsError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occurred retrieving data.';
    return ErrorObservable.create(dataError);
  }

}
