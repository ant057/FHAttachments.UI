import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUploaderModule } from 'ngx-uploader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClaimSearchComponent } from './claim-search/claim-search.component';
import { ClaimDetailComponent } from './claim-detail/claim-detail.component';
import { ClaimDropComponent } from './claim-drop/claim-drop.component';
import { ClaimAttachmentComponent } from './claim-attachment/claim-attachment.component';
import { ClaimPartyComponent } from './claim-party/claim-party.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClaimSearchComponent,
    ClaimDetailComponent,
    ClaimDropComponent,
    ClaimAttachmentComponent,
    ClaimPartyComponent,
    HighlightDirective
  ],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxUploaderModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
