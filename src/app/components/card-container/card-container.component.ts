import { Component, Input } from "@angular/core";
import { Card } from "src/app/models/card.models";

@Component({
  selector: 'card-container',
  template: `
    <div class="card-container">
      <card
        *ngFor="let item of cardDatas"
        [cardData]="item">
      </card>
    </div>
  `,
})
export class CardContainerComponent {

  @Input()
  public cardDatas: Card[] | undefined;

  constructor() {
  }
}
