import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { FirebaseListObservable } from "angularfire2";
import { PortfolioService } from "../services/portfolio.service";

declare let hljs;

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css'],
  providers: [PortfolioService]
})
export class AlgorithmsComponent implements OnInit {
  snippets: FirebaseListObservable<any[]>;
  @ViewChildren('code') snippetElements;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.snippets = this.portfolioService.getSnippets();

  }

  //TODO: figure out highlightJS
  ngAfterViewInit() {
    setTimeout(() => {
      this.snippetElements._results.forEach(el => hljs.highlightBlock(el.nativeElement))
    }, 1000)
  }

}
