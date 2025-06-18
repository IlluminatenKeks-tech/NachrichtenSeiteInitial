import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-news',
  imports: [
    RouterLink
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  category = "inland";
  region = "0";
  news:any;
  searchText: string = "null";

  constructor(private dataService: DataService) {
}
  async ngOnInit() {
    await this.loadNews()
  }
  async loadNews() {
    try {
      if(this.searchText != "null"){

        this.news = await this.dataService.getNewsBySearch(this.searchText);
        this.news = this.news.searchResults;
        this.searchText = "null";
        console.log(this.news);
      }
      else {
        if (this.region != "0") {
          this.news = await this.dataService.getNewsWithParams(this.region, this.category);
        } else {
          this.news = await this.dataService.getNewsWithParamCategory(this.category);
        }
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

  setRegion(event: Event) {
    this.region = (event.target as HTMLSelectElement).value;
    console.log(this.region);
  }

  setSearchText(event: Event) {
    this.searchText = (event.target as HTMLSelectElement).value;
    console.log(this.searchText);
  }
}
