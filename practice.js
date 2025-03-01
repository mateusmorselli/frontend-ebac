class ListaAprovados {
    constructor(nome, nota) {
        if (nota < 0 || nota > 10 || isNaN(nota)) {
            console.error(`Nota inválida para ${nome}. Definindo como 0.`);
            this.nota = 0;
        } else {
            this.nota = nota;
        }
        this.nome = nome;
    }

    aprovado() {
        return this.nota >= 6;
    }
}

const alunos = [
    new ListaAprovados("João", 8),
    new ListaAprovados("Maria", 5),
    new ListaAprovados("Carlos", 7),
    new ListaAprovados("Ana", 4)
];

const aprovados = alunos.filter(aluno => aluno.aprovado());

console.log(aprovados);

