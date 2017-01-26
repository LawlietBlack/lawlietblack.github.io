import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from "angularfire2";
import { PortfolioService } from "../services/portfolio.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  providers: [PortfolioService]
})
export class PortfolioComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.projects = this.portfolioService.getProjects();
  }

}
