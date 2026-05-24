# AnimeList

Projeto Angular para apresentar meus animes favoritos. A interface organiza minhas escolhas em seções dedicadas a animes, personagens, openings e perfil, com layout simples e direto.

## Visao geral

- Página única com cards dos meus favoritos
- Seções separadas para anime, personagem e opening
- Link do meu perfil do GitHub no cabeçalho
- Dados estáticos definidos nos componentes

## Funcionalidades

- Lista de animes favoritos com capa e link externo
- Lista de personagens favoritos com imagens
- Lista de openings favoritas com capa e link externo
- Layout responsivo com SCSS global

## Tecnologias

- Angular 17 (standalone components)
- TypeScript
- SCSS

## Como rodar localmente

1. Instale as dependencias:
   - `npm install`
2. Inicie o servidor de desenvolvimento:
   - `npm start`
3. Abra no navegador:
   - `http://localhost:4200/`

## Scripts principais

- `npm start` - inicia o servidor de desenvolvimento
- `npm test` - executa os testes unitarios
- `ng build` - gera o build de producao em `dist/`

## Estrutura de pastas (resumo)

- `src/app/component/favorite-anime`
- `src/app/component/favorite-character`
- `src/app/component/favorite-opening`
- `src/app/component/perfil`

## Roadmap (ideias)

- Transformar os dados em um service ou API
- Adicionar rotas e pagina de detalhes
- Criar formulario para editar favoritos
- Persistir escolhas em storage ou banco

## Observacoes

Projeto criado para estudos com Angular e boas praticas de componentizacao. O layout e estilizado por SCSS global, com gradientes e cards para destacar o conteudo.
