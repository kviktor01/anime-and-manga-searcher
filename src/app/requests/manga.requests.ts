import {Observable, map} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Card} from '../models/card.models';
import {Injectable} from '@angular/core';
import {Genre} from '../models/genre.model';


@Injectable({
  providedIn: 'root'
})
export class MangaRequestsService {
  constructor(private readonly http: HttpClient) {
  }

  public mangasRequest(): Observable<Card[]> {
    return this.http.get<any>('https://api.jikan.moe/v4/manga', {
      params: {
        limit: 24
      }
    }).pipe(map(response => {
        return response.data.map(
          (item: any) =>
            ({
              id: item.mal_id,
              imageUrl: item.images.jpg.image_url,
              title: item.title,
              author: item.authors[0].name,
              synopsis: item.synopsis,
              score: item.score,
              releaseStart: item.published.from.split('T')[0].replaceAll('-', '.'),
              releaseEnd: item.published.to?.split('T')[0].replaceAll('-', '.'),
              genres: item.genres.map((genre: any) => genre.name)
            } as Card)
        );
      }
    ));
  }

  public mangaGenresRequest(): Observable<Genre[]> {
    return this.http.get<any>('https://api.jikan.moe/v4/genres/manga').pipe(map(response => {
      return response.data.map((genre: any) => ({
        name: genre.name,
        id: genre['mal_id']
      }));
    }));
  }
}

