import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { FullBioComponent } from './full-bio/full-bio.component';
import { RunHomeComponent } from './run//run-home.component';
import { HikeHomeComponent } from './hike/hike-home.component';

@NgModule({
  declarations: [
    AppComponent,
    FullBioComponent,
    RunHomeComponent,
    HikeHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
