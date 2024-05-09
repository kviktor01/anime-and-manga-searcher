import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Card} from '../models/card.models';

@Component({
  template: `
    <div>
      <card-container [cardDatas]="cards"></card-container>
    </div>
  `
})
export class MainPageComponent {

  public cards: Card[];

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.cards = activatedRoute.snapshot.data['mangas'];
  }
}
