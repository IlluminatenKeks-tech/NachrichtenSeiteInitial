import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private apiUrl = 'https://v2.jokeapi.dev/joke/Any?lang=de&blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single';

  constructor() { }

  async getJoke(): Promise<any> {
    const response = await fetch(this.apiUrl);
    if (!response.ok) {
      throw new Error('Fehler beim Laden der Witzen');
    }
    return response.json();
  }

}
