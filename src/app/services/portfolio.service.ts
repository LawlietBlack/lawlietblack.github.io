import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFire } from "angularfire2";

@Injectable()
export class PortfolioService {
  projects: FirebaseListObservable<any[]>;
  skills: any;
  skillList: string[] = [
  // JavaScript Skills
  'JavaScript', 'AngularJS', 'ReactJS', 'd3js', 'jQuery', 'Nodejs', 'Express', 'AJAX', 'Gulp', 'Keystone', 'Jasmine',
  // Python Skills
  'Python', 'Django',
  // Java Skills
  'Java', 'Jersey', 'Spring', 'Hibernate', 'Tomcat', 'Maven', 'Gradle', 'Thymeleaf',
  // Ruby Skills
  'Ruby', 'Sinatra',
  // Database Skills
  'MongoDB', 'H2', 'Postgres', 'SQL',
  // Development Skills
  'oAuth', 'RESTApi', 'CMS',
  // Design Skills
  'HTML5', 'CSS3', 'Bootstrap', 'Sass', 'Responsive', 'Bourbon', 'Materialize'];

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');

    this.projects.subscribe( projects => this.skills = this.loadSkills(projects));
  }

  getProjects() {
    return this.projects;
  }

  getSkills() {
    return this.skills;
  }

  loadSkills(projects) {
    let skills = {};
    let skillsData = projects.reduce( (a, b) => {
      return a.concat(b.skills);
    }, []).forEach(skill => skills[skill] = skills[skill] ? skills[skill] + 1 : 1);
    return skills;

  }


}
