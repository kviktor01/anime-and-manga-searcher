import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { MangaRequestsService } from "../requests/manga.requests";
import { Card } from "../models/card.models";


export const mangasResolver: ResolveFn<Card[]> = () => {
  const mangaRequestsService = inject(MangaRequestsService);
  return mangaRequestsService.mangasRequest();
};
