import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from './data.service';
import { HttpCacheService } from './http-cache.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatIconModule,
  MatGridListModule, MatCardModule, MatListModule, MatSidenavModule, MatButtonModule,
  MatToolbarModule, MatProgressSpinnerModule, MatTooltipModule, MatTabsModule, MatSnackBarModule } from '@angular/material';

import { AddHeaderInterceptor } from './add-header.interceptor';
import { LogResponseInterceptor } from './log-response.interceptor';
import { CacheInterceptor } from './cache.interceptor';

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatSnackBarModule
  ],
  declarations: [],
  exports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatSnackBarModule
  ],
  providers: [
    DataService,
  { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: LogResponseInterceptor, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true},
  HttpCacheService
]
})
export class CoreModule { }
