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
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.repoCriteria = this.route.snapshot.paramMap.get('repo');
      if (this.repoCriteria) {
        this.repositoryService.getTopContributors(this.repoCriteria);
        this.topContributorItems = this.repositoryService.topContributors;
        
      } else {
        this.topContributorItems = [];
      }
  }

}
