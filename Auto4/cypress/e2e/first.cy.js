describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://blueskycitadel.com/automation-form/')
   cy.title().should('eq', 'Automation Form – BlueSky Citadel')
   
  })
})