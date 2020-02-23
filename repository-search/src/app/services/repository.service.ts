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

  constructor(private httpClient: HttpClient) {

  }
  public search(criteria: string) {
    // console.log(criteria);
    return this.httpClient.get(`${environment.apiUrl}/search/repositories?q=${criteria}`);
  }
  public getTopContributors(repo: string) {

    return this.httpClient.get(`${environment.apiUrl}/repos/${repo}/contributors`);
  }
}
