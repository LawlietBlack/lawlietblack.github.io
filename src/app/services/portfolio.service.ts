import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFire } from "angularfire2";

@Injectable()
export class PortfolioService {
  projects: FirebaseListObservable<any[]>;
  experience: FirebaseListObservable<any[]>;
  education: FirebaseListObservable<any[]>;
  skills: FirebaseListObservable<any[]>;
  logs: FirebaseListObservable<any[]>;
  snippets: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
    this.skills = angularFire.database.list('skills');
    this.experience = angularFire.database.list('experience');
    this.education = angularFire.database.list('education');
    this.logs = angularFire.database.list('logs');
    this.snippets = angularFire.database.list('snippets');
  }

  getProjects() {
    return this.projects;
  }

  getSkills() {
    return this.skills;
  }

  getExperience() {
    return this.experience;
  }

  getEducation() {
    return this.education;
  }

  getLogs() {
    return this.logs;
  }

  getSnippets() {
    return this.snippets;
  }
}
