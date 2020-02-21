import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositorySearchComponent } from './repository-search';

const routes: Routes = [
  { path: '', redirectTo: 'repositories', pathMatch: 'full'},
  { path: 'repositories', component: RepositorySearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
