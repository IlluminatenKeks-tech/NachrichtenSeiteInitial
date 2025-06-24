import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-single-news-page-params',
  imports: [],
  templateUrl: './single-news-page-params.component.html',
  styleUrl: './single-news-page-params.component.css'
})
export class SingleNewsPageParamsComponent {
  index: any;
  news: any;
  article: any;
  case: any;
  param: any;
  articleContent: any;
  requestURL: string = "";

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  async ngOnInit() {
      this.index = this.route.snapshot.paramMap.get('id');
      this.case = this.route.snapshot.paramMap.get('case');
      this.param = this.route.snapshot.paramMap.get('param');
      console.log(this.index);

    try {
      if(this.case == 0){
        this.requestURL = 'https://www.tagesschau.de/api2u/search/?searchText=' + this.param;
        this.news = await this.dataService.getNewsWithParams(this.requestURL);
        this.news = this.news.searchResults;
      }
      else if(this.case == 1){
        this.requestURL = "https://www.tagesschau.de/api2u/news/?ressort=" + this.param
        this.news = await this.dataService.getNewsWithParams(this.requestURL);
        this.news = this.news.news;
      }
      this.article = this.news[this.index];
      console.log(this.article);
      this.articleContent = this.article.content;
    } catch (error) {
      console.log("Fehler beim Laden der Nachrichten" + error);
    }
  }
}
