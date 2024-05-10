import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AnimeOrMangaType, Genre} from '../../models/genre.model';
import {Store} from '@ngrx/store';
import {animeGenresSelector, mangaGenresSelector} from '../../store/selectors/genres.selectors';

@Component({
  selector: 'search-bar',
  template: `
    <div>
      <form class="search-bar-form">
        <auto-complete
          [autocompleteValues]="(genres$ | async)!"
        ></auto-complete>
        
      </form>
    </div>
  `
})
export class SearchBarComponent implements OnInit {

  @Input()
  public mode: AnimeOrMangaType;

  public genres$: Observable<Genre[]>;

  constructor(private readonly store: Store<{ genres: { mangaGenres: Genre[], animeGenres: Genre[] } }>) {
    this.genres$ = new Observable<Genre[]>();
  }

  ngOnInit(): void {
    switch (this.mode) {
      case 'ANIME':
        this.genres$ = this.store.select(animeGenresSelector);
        break;
      case 'MANGA':
        this.genres$ = this.store.select(mangaGenresSelector);
        break;
      default:
        break;
    }
  }

}
