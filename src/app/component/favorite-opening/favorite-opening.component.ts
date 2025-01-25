import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-opening',
  standalone: true,
  imports: [],
  templateUrl: './favorite-opening.component.html',
  styleUrl: './favorite-opening.component.scss'
})
export class FavoriteOpeningComponent {

  favoriteOpenings!: FavoriteOpening[];

  ngOnInit(): void {
    this.favoriteOpenings = [
      {
        img_opening: 'https://i.ytimg.com/vi/WEN4qOcVKeM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAsR62IYpUe2rkGiTXjO_HyR7lhRA',
        link_opening: 'https://www.youtube.com/watch?v=WEN4qOcVKeM&pp=ygUGYWxvbmVz',
        name: 'Bleach Opening 6'
      },
      {
        img_opening: 'https://i.ytimg.com/vi/G8CFuZ9MseQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDO8n0TMQ5AignSszGKf6r8Ge_6iw',
        link_opening: 'https://www.youtube.com/watch?v=G8CFuZ9MseQ&pp=ygUGY29sb3Jz',
        name: 'Code Geass Opening 1'
      },
      {
        img_opening: 'https://i.ytimg.com/vi/AQ3oyp4D6FY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD0qTgn3bS0v0BduSicSR7vG3d9nw',
        link_opening: 'https://www.youtube.com/watch?v=AQ3oyp4D6FY&pp=ygUYY3Jhenkgbm9pc3kgYml6YXJyZSB0b3du',
        name: 'JoJo Opening 5'
      }
    ]
  }
}

type FavoriteOpening = {
  img_opening: string,
  link_opening: string,
  name: string
}
