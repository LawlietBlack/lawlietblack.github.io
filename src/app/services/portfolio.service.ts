import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFire } from "angularfire2";

@Injectable()
export class PortfolioService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

}
