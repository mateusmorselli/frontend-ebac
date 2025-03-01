function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

function Funcionario(nome, departamento, salario) {
    Pessoa.call(this, nome); // Herda as propriedades de Funcionario
    this.departamento = departamento;

    let _salario = salario;

    this.getSalario = function () {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.bonusSalario = function () {
        const bonus = _salario*0.05;
        return `O valor bonus que o coitado funcionario ${nome} do ${departamento} recebeu de bonus ao final de longos 12 meses de trabalho foi de: R$ ${bonus}`
    }
}

function Herdeiro(nome) {
    Funcionario.call (this, nome, 'Herdeiro', 70000)
    this.bonusSalario = function () {
        const bonus = this.getSalario()*18;
        return `O valor bonus que o merecedor herdeiro ${nome} recebeu de bonus ao final de curtas 3 semanas de trabalho foi de: R$ ${bonus}`
    }
}

function Diretor(nome) {
    Funcionario.call (this, nome, 'Diretor', 15000)
    this.bonusSalario = function () {
        const bonus = this.getSalario()*1.35;
        return `O valor bonus que o diretor ${nome} recebeu de bonus ao final de 12 meses de trabalho foi de: R$ ${bonus}`
    }
}



const funcionario1 = new Funcionario('Mateus', 'Financeiro', 5000);
const funcionario2 = new Herdeiro('Guilherme');
const funcionario3 = new Diretor('Alvaro');
const funcionario4 = new Funcionario('João', 'Almoxarifado', 2900)



console.log(funcionario1.bonusSalario());
console.log(funcionario2.bonusSalario());
console.log(funcionario3.bonusSalario());
console.log(funcionario4.bonusSalario());

