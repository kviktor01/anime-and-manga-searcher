import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MangaSearchingPageComponent} from './pages/manga-searching-page.component';
import {mangaGenresResolver, mangasResolver} from './resolvers/manga.resolvers';
import {animeGenresResolver} from './resolvers/anime.resolvers';

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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
