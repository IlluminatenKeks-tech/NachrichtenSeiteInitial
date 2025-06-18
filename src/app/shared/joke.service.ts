import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private baseUrl = 'https://v2.jokeapi.dev/joke/';

  constructor() {}

  async getJokeWithParams(lang = 'de', category = 'Any', type = 'any'): Promise<any> {
    const blacklist = 'nsfw,religious,racist,sexist,explicit';
    let url = `${this.baseUrl}${category}?lang=${lang}&blacklistFlags=${blacklist}`;

    if (type !== 'any') {
      url += `&type=${type}`;
    }

    const response = await fetch(url);
    if (!response.ok) throw new Error('Fehler beim Laden der Witze');
    return await response.json();
  }

}
