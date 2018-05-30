import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgUploaderModule } from 'ngx-uploader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatIconModule, 
  MatGridListModule, MatCardModule, MatListModule, MatSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClaimSearchComponent } from './claim-search/claim-search.component';
import { ClaimDetailComponent } from './claim-detail/claim-detail.component';
import { ClaimDropComponent } from './claim-drop/claim-drop.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClaimSearchComponent,
    ClaimDetailComponent,
    ClaimDropComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgUploaderModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
