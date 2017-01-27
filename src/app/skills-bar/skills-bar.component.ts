import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from "angularfire2";
import { PortfolioService } from "../services/portfolio.service";

@Component({
  selector: 'skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['skills-bar.component.scss']
})
export class SkillsBarComponent implements OnInit {
  currentSkill: string = 'all';
  projects: FirebaseListObservable<any[]>;
  skills: FirebaseListObservable<any[]>;
  skillList: string[];
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.projects = this.portfolioService.getProjects();
    this.skills = this.portfolioService.getSkills();
    this.skillList = this.portfolioService.skillList;
    console.log(this.skills)
  }

}
