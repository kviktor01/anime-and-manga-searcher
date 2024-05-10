import {map, Observable} from 'rxjs';
import {Genre} from '../models/genre.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeRequestsService {

  constructor(private readonly http: HttpClient) {
  }

  public animeGenresRequest(): Observable<Genre[]> {
    return this.http.get<any>('https://api.jikan.moe/v4/genres/anime').pipe(map(response => {
      return response.data.map((genre: any) => ({
        name: genre.name,
        id: genre['mal_id']
      }));
    }));
  }
}
