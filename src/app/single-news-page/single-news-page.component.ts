import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-single-news-page',
  imports: [],
  templateUrl: './single-news-page.component.html',
  styleUrl: './single-news-page.component.css'
})
export class SingleNewsPageComponent {
  index: any;
  news: any;
  News: any;
  article: any;
  articleContent: any;
  param: any;

  constructor(private route: ActivatedRoute, private dataService: DataService ) { }

  async ngOnInit() {
    this.index = this.route.snapshot.paramMap.get('id');
    this.param = this.route.snapshot.paramMap.get('param');
    console.log(this.index);
    this.news = await this.dataService.getNews();
    if(this.param == 1) {
      this.News = this.news.news;
      this.article = this.News[this.index];
    }
    else if(this.param == 2) {
      this.News = this.news.regional
      this.article = this.News[this.index];
    }
    this.articleContent = this.article.content;
    console.log(this.news);
    console.log(this.article);
  }

}
