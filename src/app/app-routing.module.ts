import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullBioComponent } from './full-bio/full-bio.component';
import { RunHomeComponent } from './run/run-home.component';
import { HikeHomeComponent } from './hike/hike-home.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticlePageComponent } from './article-page/article-page.component';

const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'run', component: RunHomeComponent },
  { path: 'hike', component: HikeHomeComponent },
  { path: 'bio', component: FullBioComponent },
  { path: ':article', component: ArticlePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
