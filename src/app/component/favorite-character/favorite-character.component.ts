import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-character',
  standalone: true,
  imports: [],
  templateUrl: './favorite-character.component.html',
  styleUrl: './favorite-character.component.scss'
})
export class FavoriteCharacterComponent {

  favoriteCharacterList!: FavoriteCharacter[];

  ngOnInit(): void {
    this.favoriteCharacterList = [
      {
        img_character: 'https://cdn.myanimelist.net/images/characters/10/386018.jpg',
        name: 'Naruto Uzumaki',
      },
      {
        img_character: 'https://cdn.myanimelist.net/images/characters/10/76415.jpg',
        name: 'Portgas D. Ace',
      },
      {
        img_character: 'https://cdn.myanimelist.net/images/characters/2/323904.jpg',
        name: 'Kurapika',
      }
    ];
  }
}

type FavoriteCharacter = {
  img_character: string,
  name?: string
}
