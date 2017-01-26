import { Component, OnInit, Input } from '@angular/core';
import { Project } from "../models/project.model";

@Component({
  selector: 'portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit() {

  }

  link(linkurl) {
    window.open(linkurl);
  }

}
