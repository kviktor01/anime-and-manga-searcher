import {Component, Input} from '@angular/core';
import {Card} from 'src/app/models/card.models';

@Component({
  selector: 'card',
  template: `
    <div class="card">
      <div class="card-front">
        <img [ngSrc]="cardData.imageUrl" fill priority alt=""/>
      </div>
      <div class="card-back">
        <h2>{{ cardData.title }}</h2>
        <div class="card-data">
          <span>Author: {{ cardData.author }}</span>
          <span>Releasing: {{ cardData.releaseStart }} - {{ cardData.releaseEnd }}</span>
          <span>Score: {{ cardData.score }}</span>
          <div class="genres-container">
            <genre-chip
              *ngFor="let genre of cardData.genres"
              [genre]="genre">
            </genre-chip>
          </div>
        </div>
        <button
          >
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
