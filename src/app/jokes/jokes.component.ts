import {Component, OnInit} from '@angular/core';
import {JokeService} from '../shared/joke.service';

@Component({
  selector: 'app-jokes',
  imports: [],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent implements OnInit {
  joke: any = null;
  showPunchline = false;

  language = 'de';
  category = 'Any';
  type = 'any';

  constructor(private jokeService: JokeService) {}

  ngOnInit(): void {
    this.loadJoke();
  }

  async loadJoke() {
    this.showPunchline = false;
    const jokeData = await this.jokeService.getJokeWithParams(this.language, this.category, this.type);
    this.joke = jokeData;
  }

  togglePunchline() {
    if (this.joke?.type === 'twopart') {
      this.showPunchline = !this.showPunchline;
    }
  }

  setLang(event: Event) {
    this.language = (event.target as HTMLSelectElement).value;
  }

  setCategory(event: Event) {
    this.category = (event.target as HTMLSelectElement).value;
  }

  setType(event: Event) {
    this.type = (event.target as HTMLSelectElement).value;
  }

}
