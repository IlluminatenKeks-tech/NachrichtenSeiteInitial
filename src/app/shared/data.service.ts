import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
news: any;
  constructor() { }
  async getNews(){
    const response = await fetch("https://www.tagesschau.de/api2u/homepage/");
    this.news = response.json();
    return this.news;
  }

  async getNewsWithParams(regions = "1", category = "inland" ){
    console.log("https://www.tagesschau.de/api2u/news/?regions="+ regions +"&ressort=" + category);
    const response = await fetch("https://www.tagesschau.de/api2u/news/?regions="+ regions +"&ressort=" + category);
    this.news = response.json();
    return this.news;
  }

  async getNewsWithParamCategory(category = "inland" ){
    const response = await fetch("https://www.tagesschau.de/api2u/news/?ressort=" + category);
    this.news = response.json();
    return this.news;
  }

  async getNewsBySearch(searchText = " " ){
    const response = await fetch(  'https://www.tagesschau.de/api2u/search/?searchText=' + searchText );
    this.news = response.json();
    return this.news;
  }

}
