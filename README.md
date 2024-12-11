![Thumbnail](./thumbnail.png)

# Deleite

**Deleite** é um projeto de e-commerce desenvolvido com Angular, utilizando renderização no servidor (SSR) para proporcionar uma experiência de navegação rápida e otimizada. O projeto inclui uma página inicial com a listagem de produtos e uma página de detalhes para exibir informações específicas de cada item.

## Funcionalidades do projeto

- **Listagem de produtos**: Exibe os produtos disponíveis com imagem e nome.
- **Tela de detalhes do produto**: Mostra informações detalhadas do produto selecionado, como preço e ingredientes, proporcionando uma experiência de compra mais informativa.

## Técnicas e tecnologias utilizadas

- **Angular com SSR (Server-Side Rendering)**: Melhora o SEO e o tempo de carregamento inicial ao renderizar conteúdo no servidor antes de exibi-lo.
- **Supabase**: Usado como backend para o banco de dados, permitindo a manipulação e consumo de dados de maneira eficiente.
- **Conexão e consumo de API no Angular**: Integração com o backend do Supabase, garantindo acesso aos dados em tempo real.
- **Angular Material**: Proporciona componentes prontos e estilizados, como cards, botões, e modais, garantindo uma interface consistente e fácil de usar.
- **Meta Tags Open Graph (OG)**: Implementadas para otimização de SEO e melhor compartilhamento em redes sociais.
- **Pré-renderização de rotas com SSG (Static Site Generation)**: Utilizada para gerar conteúdo estático para rotas específicas, melhorando a performance e o tempo de resposta.
- **Otimização de performance**: Técnicas para otimizar o carregamento e a usabilidade.

## Link do Figma

Você pode [acessar o Figma do projeto aqui](https://www.figma.com/community/file/1426683199017059395).

## Abrir e rodar o projeto

Para abrir e rodar o projeto, utilize os seguintes comandos:

### Instale as dependências

```bash
npm install
```

### Instale o angular material
```bash
ng add @angular/material
```

### Execute o projeto 
```bash
ng serve
```

Acesse o frontend localmente em seu navegador: http://localhost:4200
