import {Component, Input} from '@angular/core';
import {Card} from 'src/app/models/card.models';
import {GenreChipComponent} from '../genre-chip/genre-chip.component';

@Component({
  selector: 'card',
  imports: [GenreChipComponent],
  template: `
    <div class="card">
      <div class="card-front">
        <img [src]="cardData.imageUrl" alt=""/>
      </div>
      <div class="card-back">
        <h2>{{ cardData.title }}</h2>
        <div class="card-data">
          <span>Author: {{ cardData.author }}</span>
          <span>Releasing: {{ cardData.releaseStart }} - {{ cardData.releaseEnd }}</span>
          <span>Score: {{ cardData.score }}</span>
          <div class="genres-container">
            @for (genre of cardData.genres; track genre) {
              <genre-chip
                [genre]="genre">
              </genre-chip>
            }
          </div>
        </div>
        <button>
          Továbbiak
        </button>
      </div>
    </div>
  `
})
export class CardComponent {
  @Input()
  public cardData: Card;

  constructor() {

  }
}
