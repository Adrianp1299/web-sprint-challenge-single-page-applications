describe('testing form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/pizza')
    })
  
    it('tests name', () => {
        cy.get('[name=customer]').type('Adrian').should('have.value', 'Adrian')
    })
    it('tests you can select multiple toppings', () => {
        cy.get('[name=topping1').check()
        cy.get('[name=topping2').check()
        cy.get('[name=topping3').check()
        cy.get('[name=topping4').check()
    })
    it('tests submit', () => {
        cy.get('[type=submit]').click()
    })
})