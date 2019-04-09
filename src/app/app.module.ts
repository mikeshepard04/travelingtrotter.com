import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { RunHomeComponent } from './run//run-home.component';
import { HikeHomeComponent } from './hike/hike-home.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { MetaService } from './meta.service';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    RunHomeComponent,
    HikeHomeComponent,
    ArticleListComponent,
    ArticleComponent,
    ArticlePageComponent,
    ArticleHeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'traveling-trotter' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [MetaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
