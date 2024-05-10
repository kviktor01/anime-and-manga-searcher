import {Component, Input} from '@angular/core';
import {AnimeOrMangaType, Genre} from '../../models/genre.model';

@Component({
  selector: 'auto-complete',
  template: `
    <div class="autocomplete">
      <input
        (focusin)="openAutoComplete()"
        (focusout)="closeAutoComplete()"
      />
      <div *ngIf="open" class="autocomplete-item-container">
        <span class="autocomplete-item" *ngFor="let item of autocompleteValues">
          {{ item.name }}
        </span>
      </div>
    </div>
  `
})
export class AutoCompleteComponent {

  @Input()
  public value: Genre;

  @Input()
  public mode: AnimeOrMangaType;

  @Input()
  public autocompleteValues: Genre[];

  public open: boolean;

  constructor() {
    this.open = false;
  }

  public openAutoComplete(): void {
    this.open = true;
  }

  public closeAutoComplete(): void {
    this.open = false;
  }

}
