import { Observable, map } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Card } from "../models/card.models";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root',
})
export class MangaRequestsService {
  constructor(private readonly http: HttpClient) {}

  public mangasRequest(): Observable<Card[]> {
    return this.http.get<any>('https://api.jikan.moe/v4/manga').pipe(map(response => {
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
}

