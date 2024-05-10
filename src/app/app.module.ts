import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { MangaSearchingPageComponent } from './pages/manga-searching-page.component';
import { HttpClientModule } from '@angular/common/http';
import { GenreChipComponent } from './components/genre-chip/genre-chip.component';
import {NgOptimizedImage} from '@angular/common';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import { StoreModule } from '@ngrx/store';
import {genresReducer} from './store/reducers/genres.reducer';
import {AutoCompleteComponent} from './components/auto-complete/auto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardContainerComponent,
    MangaSearchingPageComponent,
    HeaderComponent,
    GenreChipComponent,
    SearchBarComponent,
    AutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    StoreModule.forRoot({
      genres: genresReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
