import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { masterFirebaseConfig } from "./api-keys";
import { AngularFireModule } from "angularfire2";
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { MaterialModule } from "@angular/material";
import 'hammerjs';
import { LimitPipe } from './pipes/limit.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { AboutComponent } from './about/about.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { LogsComponent } from './logs/logs.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsFilterPipe } from './pipes/skills-filter.pipe';
import { SkillsBarComponent } from './skills-bar/skills-bar.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    PortfolioCardComponent,
    LimitPipe,
    NavBarComponent,
    SocialLinksComponent,
    AboutComponent,
    AlgorithmsComponent,
    LogsComponent,
    ResumeComponent,
    SkillsFilterPipe,
    SkillsBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
