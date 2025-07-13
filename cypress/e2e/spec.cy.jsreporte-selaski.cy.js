describe('Prueba Selaski', () => {
  it('Carga correctamente la pagina', () => {
    cy.visit('https://www.selaski.com/public/reports/shared?token=cdexd34d7a31da5257e1d5f7af80e21995f0dfe8k')
    cy.contains('Ingresa', { timeout: 10000 })
    cy.url().should('include', 'selaski.com/public/reports/shared')

    cy.get('#digit1').type('5')
    cy.get('#digit2').type('5')
    cy.get('#digit3').type('6')
    cy.get('#digit4').type('9')

    cy.contains('Ingresar').click()

    cy.url().should('include', '/public/reports/shared')

    cy.contains('Filtros').click()
    cy.get('span.font-medium.text-sm.pr-2').contains('Seleccionar').click()
    cy.contains('p', 'Embarque').click({ force: true })

    const input = 'input[placeholder="Escribe aquí tu búsqueda"]'

    cy.get(input)
   .click()              
    .type('Prueba 1{enter}')


    cy.contains('Embarque').should('be.visible')
    cy.contains('Prueba 1').should('exist')

    cy.contains('Sin resultados').should('not.exist')
    cy.contains('Error').should('not.exist')

    cy.contains('Prueba 1-01', { timeout: 15000 }).should('be.visible')
    cy.contains('Prueba 1-02', { timeout: 15000 }).should('be.visible')


  })
})
