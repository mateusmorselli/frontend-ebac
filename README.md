# Exercício de TypeScript - Funções Tipadas

## Descrição
Este projeto implementa duas funções utilizando TypeScript com tipagem explícita:
1. Uma função de multiplicação que recebe dois números como argumentos e retorna o resultado da multiplicação.
2. Uma função de saudação que recebe um nome e retorna a concatenação "Olá " + nome.

## Código
```typescript
const saudacao = (nome: string): string => {
    const mensagem = `Olá ${nome}`;
    return mensagem;
};

const multiplicacao = (primeiroNum: number, segundoNum: number): number => {
    const resultado = primeiroNum * segundoNum;
    return resultado;
};

// Testando as funções
console.log(saudacao('Mateus')); // Saída: "Olá Mateus"
console.log(multiplicacao(3, 4)); // Saída: 12
```

## Tecnologias Utilizadas
- TypeScript

## Como Utilizar
1. Certifique-se de ter o TypeScript instalado:
   ```sh
   npm install -g typescript
   ```
2. Compile o arquivo TypeScript para JavaScript:
   ```sh
   tsc nome-do-arquivo.ts
   ```
3. Execute o código gerado:
   ```sh
   node nome-do-arquivo.js
   ```

