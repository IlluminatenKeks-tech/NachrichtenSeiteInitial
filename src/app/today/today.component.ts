import { Component } from '@angular/core';
import {DataService} from '../shared/data.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-today',
  imports: [
    RouterLink
  ],
  templateUrl: './today.component.html',
  styleUrl: './today.component.css'
})
export class TodayComponent {
  news: any;
  globalNews: any;
  germanyNews: any;


  constructor(private dataService: DataService) {
  }

  async ngOnInit() {
    try {
      this.news = await this.dataService.getNews();
      this.germanyNews = this.news.regional

      this.globalNews = this.news.news;
      console.log(this.germanyNews);
      console.log(this.news);
    } catch (error) {
      console.log("Fehler beim Laden der Nachrichten" + error);
    }
  }
}
