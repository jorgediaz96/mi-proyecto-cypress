describe('Regresión - PIN incorrecto en reporte Selaski', () => {
  it('Debe mostrar error y bloquear acceso si el PIN es inválido', () => {
    cy.visit('https://www.selaski.com/public/reports/shared?token=cdexd34d7a31da5257e1d5f7af80e21995f0dfe8k')

    // Ingresar PIN incorrecto (ejemplo: 1234)
    cy.get('#digit1').type('1')
    cy.get('#digit2').type('2')
    cy.get('#digit3').type('3')
    cy.get('#digit4').type('4')

    // Clic en "Ingresar"
    cy.contains('Ingresar').click()

    // Verificar que muestra mensaje de error
    cy.contains('Código incorrecto.', { timeout: 5000 }).should('be.visible')

    // Confirmar que la URL no cambió
    cy.url().should('include', '/public/reports/shared')

    // Validar que los campos del PIN siguen ahí
    cy.get('#digit1').should('exist')
  })
})