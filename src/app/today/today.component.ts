import { Component } from '@angular/core';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-today',
  imports: [],
  templateUrl: './today.component.html',
  styleUrl: './today.component.css'
})
export class TodayComponent {
news: any;

constructor(private dataService: DataService) { }
  async ngOnInit() {
  this.news = await this.dataService.getNews();
  this.news = this.news.news;
  console.log(this.news);
  }
}
