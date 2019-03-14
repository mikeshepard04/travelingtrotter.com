import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunHomeComponent } from './run/run-home.component';
import { HikeHomeComponent } from './hike/hike-home.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticlePageComponent } from './article-page/article-page.component';

const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'run', component: RunHomeComponent },
  { path: 'hike', component: HikeHomeComponent },
  { path: ':article', component: ArticlePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
