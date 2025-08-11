import { Component, Input } from "@angular/core";
import { Card } from "src/app/models/card.models";
import {CardComponent} from '../card/card.component';

@Component({
  selector: 'card-container',
  imports: [
    CardComponent
  ],
  template: `
    <div class="card-container">
      @for (item of cardDatas; track item.id){
        <card
          [cardData]="item">
        </card>
      }
    </div>
  `
})
export class CardContainerComponent {

  @Input()
  public cardDatas: Card[];

  constructor() {
  }
}
