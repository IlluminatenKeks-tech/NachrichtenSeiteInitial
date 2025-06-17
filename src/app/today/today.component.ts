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
globalNewsTeaserPictures: any [] = [];
germanyNews: any;
germanyNewsTeaserPictures : any [] = [];



constructor(private dataService: DataService) { }
  async ngOnInit() {
  this.news = await this.dataService.getNews();
  this.germanyNews = this.news.regional
    for(let i = 0; i < this.germanyNews.length; i++){
      this.germanyNewsTeaserPictures[i] = this.germanyNews[i].teaserImage;
    }
    this.globalNews = this.news.news;
    for(let i = 0; i < this.globalNews.length; i++){
      this.globalNewsTeaserPictures[i] = this.globalNews[i].teaserImage;
    }

  console.log(this.germanyNews);
  console.log(this.news);
  console.log(this.germanyNewsTeaserPictures);
  }
}
