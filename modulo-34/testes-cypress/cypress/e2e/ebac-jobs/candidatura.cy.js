/// <reference types="cypress" />

describe('testes para a pagina de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app')
    })
    it('Deve levar o usuario até a pagina', () => {        
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
    })

    it('Deve preencher o formulário de inscricao', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Mateus Morselli')
        cy.get('input[name="email"]').type('matmorselli@gmail.com   ')
        cy.get('input[name="telefone"]').type('44991172022')
        cy.get('input[name="endereco"]').type('Rua Mendes Rocha Pacheco, 355')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('pos-graduado')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
    })
})