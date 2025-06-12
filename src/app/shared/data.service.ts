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
}
