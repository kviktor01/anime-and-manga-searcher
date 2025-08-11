import { Component, Input } from "@angular/core";


@Component({
    selector: 'genre-chip',
    template: `
    <span class='genre-chip'>{{genre}}</span>
  `
})
export class GenreChipComponent {

  @Input()
  public genre: string;

}
