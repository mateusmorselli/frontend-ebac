# Calculadora de Operações Básicas

Este projeto é uma calculadora simples que permite realizar operações matemáticas básicas (soma, subtração, multiplicação e divisão) com dois números fornecidos pelo usuário.

## Descrição

A aplicação permite que o usuário insira dois números e selecione uma operação entre eles. O resultado é calculado automaticamente sempre que um número ou a operação é alterada.

## Funcionalidades

- **Entrada de dois números**: O usuário pode inserir dois números para realizar a operação.
- **Seleção de operação**: O usuário pode escolher entre soma, subtração, multiplicação ou divisão.
- **Cálculo automático**: O resultado é atualizado automaticamente conforme os números ou a operação mudam.

## Tecnologias Usadas

- **Vue.js**: Framework JavaScript para construção de interfaces interativas.
- **HTML**: Para a estruturação da página.
- **CSS**: Para o estilo e layout da página.
- **Bootstrap**: Framework CSS para criar a interface responsiva e visualmente agradável.

## Como Funciona

1. O usuário insere o primeiro número no campo correspondente.
2. O usuário escolhe uma operação no dropdown.
3. O usuário insere o segundo número no campo correspondente.
4. O resultado da operação é exibido automaticamente.

## Como Rodar o Projeto

1. Clone o repositório
2. Instale as dependências
   npm install
3. Execute o projeto
   npm run dev
4. Acesse a aplicação no seu navegador no endereço http://localhost:3000.

## Estrutura do Projeto
├── src
│   ├── assets       # Arquivos de imagem e recursos estáticos
│   ├── components   # Componentes Vue.js
│   │   └── Cabecalho.vue
│   │   └── Calculos.vue
│   │   └── Results.vue
│   ├── App.vue      # Componente principal
│   └── main.js      # Arquivo de entrada
├── public
│   └── index.html   # Arquivo HTML principal
├── package.json     # Dependências e scripts do projeto
└── README.md        # Este arquivo

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
