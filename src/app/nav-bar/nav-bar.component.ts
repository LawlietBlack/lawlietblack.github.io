import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  navLinks = [
    { label: 'PORTFOLIO', link: ''},
    { label: 'ALGORITHMS', link: 'algorithms'},
    { label: 'LOGS', link: 'logs'},
    { label: 'RESUME', link: 'resume'},
    { label: 'ABOUT', link: 'about'}
  ];
  urlLinks: string[] = this.navLinks.map(nav => `/${nav.link}`);
  constructor(public router: Router) { }

  ngOnInit() {
  }

  getRoute() {
    return this.urlLinks.indexOf(this.router.url);
  }

  navigate(e) {
    let url = this.navLinks[e.index].link;
    this.router.navigate([url]);
  }

}
