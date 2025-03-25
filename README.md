# Cypress Tests - Contact List

Este projeto contém testes automatizados usando Cypress para validar as funcionalidades de adicionar, editar e remover contatos na aplicação de lista de contatos.

## Descrição

Os testes verificam se a aplicação de lista de contatos está funcionando corretamente, cobrindo os seguintes casos de uso:

- Adicionar novos contatos.
- Editar contatos existentes.
- Remover contatos.

Esses testes garantem que a interação com a API e a interface da aplicação estejam funcionando como esperado.

## Funcionalidades Testadas

- **Adicionar Contato**: Preenche os campos de nome, email e telefone, e adiciona um novo contato.
- **Editar Contato**: Altera as informações de um contato existente.
- **Excluir Contato**: Remove um contato da lista.

## Tecnologias Utilizadas

- **Cypress**: Framework de testes end-to-end.
- **JavaScript**: Linguagem de programação usada para os testes.
- **API de Contatos**: Simulação de uma API para testar a inserção, atualização e remoção de contatos.

## Testes

Os testes são realizados em três etapas:

1. **Adicionar um novo contato**
2. **Editar um contato existente**
3. **Remover um contato**

### Código dos Testes

```javascript
/// <reference types="cypress" />

describe('testes de inclusao, edicao e remocao de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')        
    })

    it('Deve preencher os campos e adicionar', () => {  
        cy.get('[type="text"]').type('Mateus Moselli')
        cy.get('[type="email"]').type('matmoselli@gmail.com')
        cy.get('[type="tel"]').type('44991172021')
        cy.intercept('POST', 'https://fake-api-tau.vercel.app/api/contatos').as('resultado')
        cy.get('.adicionar').click()
        cy.get('@resultado').its('response.statusCode').should('eq', 200)
        cy.screenshot("adicionar");
    })

    it('Deve editar um contato e salvar', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()  
        cy.get('[type="text"]').clear().type('Mateus Morselli')
        cy.get('[type="email"]').clear().type('matmorselli@gmail.com')
        cy.get('[type="tel"]').clear().type('44991172022')
        cy.intercept('PUT', 'https://fake-api-tau.vercel.app/api/contatos').as('resultado')
        cy.get('.alterar').click()
        cy.get('@resultado').its('response.statusCode').should('eq', 200)
        cy.screenshot("editar");
    })

    it('Deve remover um contato', () => {
        cy.intercept('DELETE', 'https://fake-api-tau.vercel.app/api/contatos').as('resultado')
        cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
        cy.get('@resultado').its('response.statusCode').should('eq', 200)
        cy.screenshot("deletar");
    })
})
