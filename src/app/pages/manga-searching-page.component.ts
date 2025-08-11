import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Card} from '../models/card.models';
import {Store} from '@ngrx/store';
import {setAnimeGenres, setMangaGenres} from '../store/actions/genres.actions';
import {Genre} from '../models/genre.model';
import {CardContainerComponent} from '../components/card-container/card-container.component';
import {SearchBarComponent} from '../components/search-bar/search-bar.component';

@Component({
  imports: [
    CardContainerComponent,
    SearchBarComponent
  ],
  template: `
    <div class="main-container">
      <search-bar
        [mode]="'MANGA'">
      </search-bar>
      <card-container [cardDatas]="cards"></card-container>
    </div>
  `
})
export class MangaSearchingPageComponent {

  public cards: Card[];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly store: Store<{genres: {mangaGenres: Genre[], animeGenres: Genre[]}}>
  ) {
    this.cards = activatedRoute.snapshot.data['mangas'];
    this.store.dispatch(setMangaGenres({genres: activatedRoute.snapshot.data['mangaGenres']}));
    this.store.dispatch(setAnimeGenres({genres: activatedRoute.snapshot.data['mangaGenres']}));
  }
}
