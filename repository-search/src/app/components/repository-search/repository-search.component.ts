import { Component, OnInit } from '@angular/core';
import { RepositoryModel } from 'src/app/models/repository.model';
import { RepositoryService } from 'src/app/services/repository.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-repository-search',
  templateUrl: './repository-search.component.html',
  styleUrls: ['./repository-search.component.css']
})
export class RepositorySearchComponent implements OnInit {
  public repositoryItems: RepositoryModel[] = [];
  public searchCriteria: string;
  public selectedRepo: string;
  public isLoading: boolean = false;

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    // this.repositoryItems = this.repositoryService.repositoryItems;
  }

  public search(){
    this.isLoading = true;
    this.repositoryService.search(this.searchCriteria).subscribe((list:any) => {
      this.repositoryItems = list.items.slice(0, 6);
      });
    this.isLoading = false;
  }

  public getTopContributors(repo: RepositoryModel): void{
    this.selectedRepo = repo.full_name;
  }
}
