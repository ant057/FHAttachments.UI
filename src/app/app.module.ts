import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgUploaderModule } from 'ngx-uploader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgUploaderModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
