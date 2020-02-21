import { Component, OnInit } from '@angular/core';
import { RepositoryModel } from 'src/app/models/repository.model';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-repository-search',
  templateUrl: './repository-search.component.html',
  styleUrls: ['./repository-search.component.css']
})
export class RepositorySearchComponent implements OnInit {
  public repositoryItems: RepositoryModel[] = [];

  public selectedRepo: string;

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.repositoryItems = this.repositoryService.repositoryItems;
  }

  public search(criteria: string){
    this.repositoryService.search(criteria);
    this.repositoryItems = this.repositoryService.repositoryItems;
  }

  public getTopContributors(repo: RepositoryModel): void{
    this.selectedRepo = repo.full_name;
  }
}
