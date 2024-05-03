import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/card.models';

@Component({
  selector: 'card',
  template: `
    <div class="card">
      <div class="card-front">
        <img [src]="cardData?.imageUrl" />
      </div>
      <div class="card-back">
        <h2>{{ cardData?.title }}</h2>
        <div class="card-data">
          <span>Author: {{ cardData?.author }}</span>
          <span>Releasing: {{cardData?.releaseStart}} - {{cardData?.releaseEnd}}</span>
          <span>Score: {{cardData?.score}}</span>
        </div>
      </div>
    </div>
  `,
})
export class CardComponent {
  @Input()
  public cardData: Card | undefined;

  constructor() {}
}
