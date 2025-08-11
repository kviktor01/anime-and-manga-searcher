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
      @if (open) {
        <div class="autocomplete-item-container">
          @for (item of autocompleteValues; let index = $index; track index){
            <span class="autocomplete-item">
          {{ item.name }}
        </span>
          }
        </div>
      }
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
