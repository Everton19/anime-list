import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-anime',
  standalone: true,
  imports: [],
  templateUrl: './favorite-anime.component.html',
  styleUrl: './favorite-anime.component.scss'
})
export class FavoriteAnimeComponent {

  favoriteAnimeList!: FavoriteAnime[];

  ngOnInit(): void {
    this.favoriteAnimeList = [
      {
        img_anime: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
        link_anime: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
        name: 'Hunter x Hunter'
      },
      {
        img_anime: 'https://cdn.myanimelist.net/images/anime/1011/120243.jpg',
        link_anime: 'https://myanimelist.net/anime/21/One_Piece',
        name: 'One Piece'
      },
      {
        img_anime: 'https://cdn.myanimelist.net/images/anime/7/74317.jpg',
        link_anime: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',
        name: 'Fullmetal Alchemist: Brotherhood'
      }
    ]
  }
}

type FavoriteAnime = {
  img_anime: string,
  link_anime: string,
  name: string
}
