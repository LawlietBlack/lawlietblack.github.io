import { Component, OnInit } from '@angular/core';
import { PortfolioService } from "../services/portfolio.service";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  providers: [PortfolioService]
})
export class ResumeComponent implements OnInit {
  skills;
  projects;
  experience;
  education;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.projects = this.portfolioService.getProjects();
    this.skills = this.portfolioService.getSkills();
    this.experience = this.portfolioService.getExperience();
    this.education = this.portfolioService.getEducation();
    console.log(this.skills);

  }

}
