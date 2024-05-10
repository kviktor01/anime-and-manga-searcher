import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Card} from '../models/card.models';
import {Store} from '@ngrx/store';
import {setAnimeGenres, setMangaGenres} from '../store/actions/genres.actions';
import {Genre} from '../models/genre.model';
import {Observable} from 'rxjs';
import {mangaGenresSelector} from '../store/selectors/genres.selectors';

@Component({
  template: `
    <div>
      <card-container [cardDatas]="cards"></card-container>
    </div>
  `
})
export class MainPageComponent {

  public cards: Card[];
  public genres$: Observable<Genre[]>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly store: Store<{genres: {mangaGenres: Genre[], animeGenres: Genre[]}}>
  ) {
    this.cards = activatedRoute.snapshot.data['mangas'];
    this.store.dispatch(setMangaGenres({genres: activatedRoute.snapshot.data['mangaGenres']}));
    this.store.dispatch(setAnimeGenres({genres: activatedRoute.snapshot.data['mangaGenres']}));
    this.store.select(mangaGenresSelector).subscribe(value => console.log(value));
  }
}
