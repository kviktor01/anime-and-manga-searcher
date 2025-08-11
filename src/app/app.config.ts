import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import {provideRouter, Routes} from '@angular/router';
import {MangaSearchingPageComponent} from './pages/manga-searching-page.component';
import {mangaGenresResolver, mangasResolver} from './resolvers/manga.resolvers';
import {animeGenresResolver} from './resolvers/anime.resolvers';
import {provideHttpClient} from '@angular/common/http';
import {provideStore} from '@ngrx/store';
import {genresReducer} from './store/reducers/genres.reducer';

const routes: Routes = [
  {
    path: '',
    component: MangaSearchingPageComponent,
    resolve: {
      mangas: mangasResolver,
      mangaGenres: mangaGenresResolver,
      animeGenres: animeGenresResolver
    }
  }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    provideHttpClient(),
    provideStore({ genres: genresReducer}),
    provideRouter(routes)
  ]
};
