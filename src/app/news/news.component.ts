import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';
import {RouterLink} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-news',
  imports: [
    RouterLink,
    DatePipe
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  category = "inland";
  news:any;
  searchText: string = "null";
  requestURL: string = "";
  case: number = 0;
  parameterForSinglePage: any;

  constructor(private dataService: DataService) {
}
  async ngOnInit() {
    await this.loadNews()
  }
  async loadNews() {
    try {
      if(this.searchText != "null"){
        this.requestURL = 'https://www.tagesschau.de/api2u/search/?searchText=' + this.searchText;
        this.news = await this.dataService.getNewsWithParams(this.requestURL);
        this.news = this.news.searchResults;
        this.parameterForSinglePage = this.searchText;
        this.case = 0;
        console.log(this.news);
      }
      else {
          this.requestURL = "https://www.tagesschau.de/api2u/news/?ressort=" + this.category
          this.news = await this.dataService.getNewsWithParams(this.requestURL);
          this.case = 1;
          this.parameterForSinglePage = this.category;
        this.news = this.news.news;
        console.log(this.news);
      }
    } catch (error) {
      console.log("Fehler beim Laden der Nachrichten" + error);
    }
  }

  setCategory(event: Event) {
    this.category = (event.target as HTMLSelectElement).value;
    console.log(this.category);
  }


  setSearchText(event: Event) {
    this.searchText = (event.target as HTMLSelectElement).value;
    console.log(this.searchText);
  }

  protected readonly Date = Date;
}
