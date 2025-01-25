import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FavoriteAnimeComponent } from "./component/favorite-anime/favorite-anime.component";
import { FavoriteCharacterComponent } from "./component/favorite-character/favorite-character.component";
import { PerfilComponent } from "./component/perfil/perfil.component";
import { FavoriteOpeningComponent } from "./component/favorite-opening/favorite-opening.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FavoriteAnimeComponent, FavoriteCharacterComponent, PerfilComponent, FavoriteOpeningComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nlw-anime';
}
