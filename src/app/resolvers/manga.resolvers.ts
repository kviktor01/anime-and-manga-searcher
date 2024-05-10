import {inject} from '@angular/core';
import {ResolveFn} from '@angular/router';
import {MangaRequestsService} from '../requests/manga.requests';
import {Card} from '../models/card.models';
import {Genre} from '../models/genre.model';


export const mangasResolver: ResolveFn<Card[]> = () => {
  const mangaRequestsService = inject(MangaRequestsService);
  return mangaRequestsService.mangasRequest();
};

export const mangaGenresResolver: ResolveFn<Genre[]> = () => {
  const mangaRequestService = inject(MangaRequestsService);
  return mangaRequestService.mangaGenresRequest();
}
