import {ResolveFn} from '@angular/router';
import {Genre} from '../models/genre.model';
import {inject} from '@angular/core';
import {AnimeRequestsService} from '../requests/anime.requests';

export const animeGenresResolver: ResolveFn<Genre[]> = () => {
  const animeRequestService = inject(AnimeRequestsService);
  return animeRequestService.animeGenresRequest();
}
