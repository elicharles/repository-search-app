import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositorySearchComponent } from './components/repository-search/repository-search.component';
import { TopContributorsComponent } from './components/top-contributors/top-contributors.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'repositories', pathMatch: 'full'},
  { path: 'repositories/:query', component: RepositorySearchComponent },
  { path: 'repositories', component: RepositorySearchComponent },
  { path: 'topcontributors/:repo', component: TopContributorsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
