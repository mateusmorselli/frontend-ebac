# Módulo 15

Este é um projeto de uma loja de produtos, que apresenta uma página inicial com uma lista de produtos. O layout é responsivo e se adapta a diferentes tamanhos de tela, incluindo desktop, tablet e dispositivos móveis.

## Estrutura do Projeto

- `index.html`: Arquivo principal que contém a estrutura HTML da página.
- `build/style.css`: Arquivo CSS gerado pelo pré-processador Sass, contendo o estilo da página.
- `config/reset.scss`: Arquivo de reset de estilo para normalizar os estilos entre diferentes navegadores.
- `config/variaveis.scss`: Contém variáveis de estilo como fontes, cores e breakpoints.

## Funcionalidades

- **Menu de navegação**: Um menu fixo no topo da página com links para navegar.
- **Produtos**: Exibição de uma lista de produtos com imagens, descrições e links para ver detalhes.
- **Responsividade**: O layout é ajustado para diferentes tamanhos de tela com o uso de breakpoints.

## Tecnologias Utilizadas

- **HTML5**: Para estruturação do conteúdo da página.
- **Sass**: Utilizado para estilizar o layout e organizar as variáveis e mixins.
- **Fontes do Google**: Fonte **Roboto** para o texto da página.
- **CSS Grid**: Usado para organizar os produtos de forma responsiva.

## Personalização

Você pode ajustar as seguintes variáveis em `config/variaveis.scss` para personalizar as cores e fontes do projeto:

- **Fonte principal**: `$fontePrincipal`
- **Cor de fundo**: `$corDeFundo`
- **Cor do cabeçalho**: `$corHeader`
- **Cor dos botões**: `$corButton`
- **Breakpoints**: `$mobile`, `$tablet`

## Licença

Este projeto está sob a licença [MIT](https://opensource.org/licenses/MIT).
