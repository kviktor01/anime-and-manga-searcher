import {createAction, props} from '@ngrx/store';
import {Genre} from '../../models/genre.model';

export const setMangaGenres = createAction(
  '[genres] setMangaGenres',
  props<{genres: Genre[]}>()
);

export const setAnimeGenres = createAction(
  '[genres] setAnimeGenres',
  props<{genres: Genre[]}>()
)
