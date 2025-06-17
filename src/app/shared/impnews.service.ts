import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImpnewsService {
  private apiUrl = 'https://www.tagesschau.de/api2u/news/?regions=1&ressort=inland&breakingNews=true';

  constructor() {}

  async getHomepageNews(): Promise<any> {
    const response = await fetch(this.apiUrl);
    if (!response.ok) {
      throw new Error('Fehler beim Laden der Nachrichten');
    }
    return response.json();
  }
}
