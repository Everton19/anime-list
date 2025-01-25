import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
  perfil!: Perfil;

  ngOnInit(): void {
    this.perfil = {
      link_github: 'https://github.com/Everton19',
      alt_image: 'Foto de perfil do GitHub'
    };
  }
}

type Perfil = {
  link_github: string;
  alt_image: string;
}
