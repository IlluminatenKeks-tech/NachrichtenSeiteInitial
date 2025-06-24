import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {JokesComponent} from './jokes/jokes.component';
import {NewsComponent} from './news/news.component';
import {TodayComponent} from './today/today.component';
import {SingleNewsPageComponent} from './single-news-page/single-news-page.component';
import {SingleNewsPageParamsComponent} from './single-news-page-params/single-news-page-params.component';
import {ReportsComponent} from './reports/reports.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'jokes', component: JokesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'today', component: TodayComponent },
  { path: 'today/:id/:param', component: SingleNewsPageComponent },
  {path: 'news/:id/:case/:param', component: SingleNewsPageParamsComponent },
  { path: 'reports', component: ReportsComponent },
];
