import { Component, OnInit } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
import { ContributorModel } from 'src/app/models/contributor.model';
import { RepositoryService } from 'src/app/services/repository.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-top-contributors',
  templateUrl: './top-contributors.component.html',
  styleUrls: ['./top-contributors.component.css']
})
export class TopContributorsComponent implements OnInit {
  public topContributorItems: ContributorModel[] = [];
  public repoCriteria: string;
  public searchCriteria: string = null;
  public isLoading: boolean = false;
  public pageRecords: number = 10;
  public pageSize: number = 5;

  constructor(
    private route: ActivatedRoute,
    // private router: Router,
    private _location: Location,
    private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.repoCriteria = this.route.snapshot.paramMap.get('repo');
    console.log(this.repoCriteria);
    if (this.repoCriteria) {
      this.repositoryService.getTopContributors(this.repoCriteria).subscribe((list: any) => {
        this.topContributorItems = list;//.slice(0, 10);
      });
      // console.log(this.topContributorItems);
    } else {
      this.topContributorItems = [];
    }
    this.isLoading = false;
  }
  backClicked() {
    this._location.back();
  }
  loadMore() {
    this.pageRecords = this.pageRecords + this.pageSize;
  }
}
