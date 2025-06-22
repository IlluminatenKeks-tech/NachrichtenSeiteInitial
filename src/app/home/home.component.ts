import {Component, OnInit} from '@angular/core';
import {ImpnewsService} from '../shared/impnews.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  importantNews: any[] = [];

  constructor(private impnewsService: ImpnewsService) {}

  async ngOnInit() {
    try {
      const data = await this.impnewsService.getHomepageNews();
      this.importantNews = data.news.slice(0, 4);
      console.log(data.news);
    } catch (error) {
      console.error('Fehler beim Laden der Nachrichten:', error);
    }
  }

}
