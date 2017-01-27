import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { AboutComponent } from "./about/about.component";
import { LogsComponent } from "./logs/logs.component";
import { ResumeComponent } from "./resume/resume.component";
import { AlgorithmsComponent } from "./algorithms/algorithms.component";

const appRoutes: Routes = [{
  path: '',
  component: PortfolioComponent
}, {
  path: 'algorithms',
  component: AlgorithmsComponent
}, {
  path: 'logs',
  component: LogsComponent
}, {
  path: 'resume',
  component: ResumeComponent
}, {
  path: 'about',
  component: AboutComponent
}];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);