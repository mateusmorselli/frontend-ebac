# Lista de Aprovados

Este projeto implementa uma classe chamada `ListaAprovados` para armazenar e filtrar alunos com base em suas notas. O objetivo é criar um array de objetos contendo o nome e a nota de alunos e, posteriormente, filtrar aqueles que obtiveram nota maior ou igual a 6.

## Tecnologias Utilizadas

- JavaScript (ES6+)
- Babel (para transpilar código moderno para versões compatíveis com mais navegadores)

## Estrutura do Código

### Classe `ListaAprovados`

A classe `ListaAprovados` possui os seguintes atributos e métodos:

- **`constructor(nome, nota)`**: Recebe o nome e a nota do aluno. Caso a nota não seja válida (menor que 0 ou maior que 10), ela é definida como `0`.
- **`aprovado()`**: Retorna `true` se a nota do aluno for maior ou igual a 6, caso contrário, retorna `false`.

### Array de Alunos

O código cria um array `alunos` contendo instâncias da classe `ListaAprovados`, representando diferentes alunos e suas respectivas notas.

### Filtragem de Aprovados

Utiliza o método `filter()` para criar um novo array chamado `aprovados`, contendo apenas os alunos com nota maior ou igual a 6.

## Configuração do Babel

O projeto utiliza Babel para transpilar código moderno para uma versão compatível com navegadores mais antigos. As dependências do Babel estão listadas no arquivo `package.json`:

```json
{
  "scripts": {
    "build": "babel src --watch -d dist"
  },
  "browserslist": "> 0.25%",
  "devDependencies": {
    "@babel/cli": "^7.26.4",
    "@babel/core": "^7.26.9",
    "@babel/preset-env": "^7.26.9"
  }
}
```

Após a transpiração, o código gerado inclui as funções auxiliares do Babel para compatibilidade com versões mais antigas do JavaScript.

## Exemplo de Saída no Console

```javascript
[
  ListaAprovados { nome: 'João', nota: 8 },
  ListaAprovados { nome: 'Carlos', nota: 7 }
]
```

Os alunos "João" e "Carlos" foram aprovados, pois suas notas são 8 e 7, respectivamente.

## Execução do Projeto

1. Instale as dependências com:
   ```sh
   npm install
   ```
2. Transpile o código com:
   ```sh
   npm run build
   ```
3. Execute o arquivo JavaScript gerado na pasta `dist`.

---

Este projeto exemplifica como utilizar classes, métodos e a função `filter()` para manipular listas de objetos em JavaScript, além de demonstrar a configuração do Babel para compatibilidade com navegadores mais antigos.
