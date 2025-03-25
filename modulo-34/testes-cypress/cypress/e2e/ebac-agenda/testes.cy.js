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