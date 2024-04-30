import { Component } from "@angular/core";
import { Card } from "src/app/models/card.models";

@Component({
  selector: 'card-container',
  template: `
    <div class="card-container">
      <card [cardData]="cardData1"></card>
      <card [cardData]="cardData2"></card>
      <card [cardData]="cardData1"></card>
      <card [cardData]="cardData1"></card>
    </div>
  `,
})
export class CardContainerComponent {
  public cardData1: Card;

  public cardData2: Card;

  constructor() {
    this.cardData1 = {
      imageUrl: 'https://cdn.myanimelist.net/images/manga/3/258224.jpg',
      title: 'Monster',
      author: 'Test author',
      synopsis: '',
      score: 0,
      releaseStart: '',
    };

    this.cardData2 = {
      imageUrl: 'https://cdn.myanimelist.net/images/manga/1/157897.jpg',
      title: 'Monster',
      author: 'Test author',
      synopsis: '',
      score: 0,
      releaseStart: '',
    };
  }
}
