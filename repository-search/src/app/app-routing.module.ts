import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositorySearchComponent } from './components/repository-search/repository-search.component';
import { TopContributorsComponent } from './components/top-contributors/top-contributors.component';

const routes: Routes = [
  { path: '', redirectTo: 'repositories', pathMatch: 'full'},
  { path: 'repositories', component: RepositorySearchComponent },
  { path: 'topcontributors/:repo', component: TopContributorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
