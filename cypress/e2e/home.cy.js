describe('load the homepage', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.log('This test has sucessfully opened the app.');
  })
})