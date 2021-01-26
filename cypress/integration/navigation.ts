describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should change to About page', () => {
    cy.get('[test-id="about-navigation"]').click()

    cy.get('[test-id="about-title"]').contains('About')
  })
})
