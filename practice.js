"use strict";
const saudacao = (nome) => {
    const mensagem = `Olá ${nome}`;
    return mensagem; // Retorna uma string
};
// Função de multiplicação com retorno tipado explicitamente
const multiplicacao = (primeiroNum, segundoNum) => {
    const resultado = primeiroNum * segundoNum;
    return resultado; // Retorna um number
};
// Testando as funções
console.log(saudacao('Mateus'));
console.log(multiplicacao(3, 4));
