import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FirebaseListObservable } from "angularfire2";
import { PortfolioService } from "../services/portfolio.service";

@Component({
  selector: 'skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['skills-bar.component.scss']
})
export class SkillsBarComponent implements OnInit {
  @Input() currentSkill: string;
  @Output() skillFilterEvent = new EventEmitter();

  projects: FirebaseListObservable<any[]>;
  skills: FirebaseListObservable<any[]>;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.projects = this.portfolioService.getProjects();
    this.skills = this.portfolioService.getSkills();
  }

  skillFilter(skill) {
    this.skillFilterEvent.emit(skill);
  }

}
