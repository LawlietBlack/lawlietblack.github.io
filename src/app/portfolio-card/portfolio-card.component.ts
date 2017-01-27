import { Component, OnInit, Input } from '@angular/core';
import { Project } from "../models/project.model";

@Component({
  selector: 'portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit {
  @Input() project: Project;
  limitNum: number = 8;

  constructor() { }

  ngOnInit() {

  }

  link(linkurl) {
    window.open(linkurl);
  }

  showMore() {
    this.limitNum = this.limitNum === 8 ? 20 : 8;
  }

}
