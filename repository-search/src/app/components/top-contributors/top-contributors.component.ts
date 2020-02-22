import { Component, OnInit } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
import { ContributorModel } from 'src/app/models/contributor.model';
import { RepositoryService } from 'src/app/services/repository.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-top-contributors',
  templateUrl: './top-contributors.component.html',
  styleUrls: ['./top-contributors.component.css']
})
export class TopContributorsComponent implements OnInit {
  public topContributorItems: ContributorModel[] = [];
  public repoCriteria: string;
  public isLoading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.repoCriteria = this.route.snapshot.paramMap.get('repo');
    console.log(this.repoCriteria);
      if (this.repoCriteria) {
        this.repositoryService.getTopContributors(this.repoCriteria).subscribe((list:any) => {
          this.topContributorItems = list.slice(0, 10);
      });
        // console.log(this.topContributorItems);
      } else {
        this.topContributorItems = [];
      }
      this.isLoading = false;
  }

}
