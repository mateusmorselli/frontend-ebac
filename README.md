# Calculadora de IMC em React

Este é um projeto simples de uma calculadora de IMC (Índice de Massa Corporal) desenvolvido em React. O aplicativo permite que o usuário insira seu nome, altura e peso, e calcula o IMC, exibindo o resultado e a classificação correspondente.

## Funcionalidades

- **Cálculo do IMC**: O aplicativo calcula o IMC com base na altura e peso fornecidos.
- **Classificação**: Exibe a classificação do IMC de acordo com a tabela padrão.
- **Componentização**: O projeto está dividido em componentes reutilizáveis (`Calculadora` e `Resultado`).

## Estrutura do Projeto

src/  
├── components/  
│ ├── Calculadora/  
│ │ └── index.jsx  
│ └── Resultado/  
│ └── index.jsx  
├── App.js  
├── App.css  
└── index.js  

- **Calculadora**: Componente responsável por coletar os dados do usuário e calcular o IMC.
- **Resultado**: Componente que exibe o resultado do cálculo do IMC e a classificação.
- **App.js**: Componente principal que integra Calculadora e Resultado.


## Tecnologias usadas

- React
- JavaScript
- CSS

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
