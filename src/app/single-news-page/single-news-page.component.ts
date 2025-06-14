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
  globalNews: any;
  article: any;
  articleContent: any;

  constructor(private route: ActivatedRoute, private dataService: DataService ) { }

  async ngOnInit() {
    this.index = this.route.snapshot.paramMap.get('id');
    console.log(this.index);
    this.news = await this.dataService.getNews();
    this.globalNews = this.news.news;
    this.article = this.globalNews[this.index];
    this.articleContent = this.article.content;
    console.log(this.news);
    console.log(this.article);
  }

}
