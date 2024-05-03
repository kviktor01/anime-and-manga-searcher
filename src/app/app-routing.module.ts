import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page.component';
import { mangasResolver } from './resolvers/manga.resolvers';

const routes: Routes = [
{
  path:'',
  component: MainPageComponent,
  resolve: { mangas: mangasResolver}
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
