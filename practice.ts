const saudacao = (nome: string): string => {
    const mensagem = `Olá ${nome}`;
    return mensagem; // Retorna uma string
};

const multiplicacao = (primeiroNum: number, segundoNum: number): number => {
    const resultado = primeiroNum * segundoNum;
    return resultado; // Retorna um number
};

// Testando as funções
console.log(saudacao('Mateus'));
console.log(multiplicacao(3, 4));