import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullBioComponent } from './full-bio/full-bio.component';
import { RunHomeComponent } from './run/run-home.component'
import { HikeHomeComponent } from './hike/hike-home.component'

const routes: Routes = [
  { path: '', component: FullBioComponent },
  { path: 'home', component: FullBioComponent },
  { path: 'run', component: RunHomeComponent },
  { path: 'hike', component: HikeHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
