import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './home/components/pokemon-card/pokemon-card.component';
import { PokemonDetailComponent } from './home/components/pokemon-detail/pokemon-detail.component';
import { SearchPokemonComponent } from './home/components/search-pokemon/search-pokemon.component';
import { LayoutComponent } from './home/components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    PokemonDetailComponent,
    SearchPokemonComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
