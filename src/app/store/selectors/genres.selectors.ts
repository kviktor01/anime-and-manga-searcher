import {Genre} from '../../models/genre.model';


export const mangaGenresSelector = (state: {genres: {mangaGenres: Genre[], animeGenres: Genre[]}}) => {
  return state.genres.mangaGenres;
}

export const animeGenresSelector = (state: {genres: {mangaGenres: Genre[], animeGenres: Genre[]}}) => {
  return state.genres.animeGenres;
}
