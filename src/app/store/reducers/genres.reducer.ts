import {createReducer, on} from '@ngrx/store';
import {setAnimeGenres, setMangaGenres} from '../actions/genres.actions';
import {Genre} from '../../models/genre.model';

const initialState: { mangaGenres: Genre[], animeGenres: Genre[] } = {
  mangaGenres: [],
  animeGenres: []
};

export const genresReducer = createReducer(
  initialState,
  on(setMangaGenres, (state, action) => ({...state, mangaGenres: action.genres})),
  on(setAnimeGenres, (state, action) => ({...state, animeGenres: action.genres}))
);
