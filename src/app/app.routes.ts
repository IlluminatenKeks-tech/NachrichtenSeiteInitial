import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {JokesComponent} from './jokes/jokes.component';
import {NewsComponent} from './news/news.component';
import {TodayComponent} from './today/today.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'jokes', component: JokesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'today', component: TodayComponent },
];
