import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {PortfolioComponent} from "./portfolio/portfolio.component";

const appRoutes: Routes = [{
  path: '',
  component: PortfolioComponent
}];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);