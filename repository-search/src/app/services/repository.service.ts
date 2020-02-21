import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepositoryModel } from '../models/repository.model';
import { ContributorModel } from '../models/contributor.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  public repositoryItems: RepositoryModel[] = [];
  public topContributors: ContributorModel[] = [];
  // @Output() criteria: EventEmitter<string> = new EventEmitter();
  constructor(private httpClient: HttpClient) {

  }
  public search(criteria: string): void {

     this.httpClient.get<RepositoryModel[]>(`${environment.apiUrl}/search/repositories?q=${criteria}`).subscribe((list) => {
        this.repositoryItems = list;
    });
  }
  public getTopContributors(repo: string): void {

     this.httpClient.get<ContributorModel[]>(`${environment.apiUrl}/repos/${repo}/contributors`).subscribe((list) => {
        this.topContributors = list;
    });
  }
}
