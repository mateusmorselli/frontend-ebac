const form = document.getElementById('form-contatos');
const nomesContatos = [];
const numContatos = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarContatos();
    atualizaTabela();
});

function adicionarContatos() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumContato = document.getElementById('num-contato');

    if (nomesContatos.includes(inputNomeContato.value) && numContatos.includes(inputNumContato.value)) {
        alert(`O contato de nome: ${inputNomeContato.value} e o número ${inputNumContato.value} já existem`)
    } else if (nomesContatos.includes(inputNomeContato.value)) {
        alert(`O contato de nome: ${inputNomeContato.value} já está cadastrado`)
    } else if (numContatos.includes(inputNumContato.value)) {
        alert(`O telefone: ${inputNumContato.value} já está cadastrado`)
    } else {        
        nomesContatos.push(inputNomeContato.value);
        numContatos.push(inputNumContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumContato.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

