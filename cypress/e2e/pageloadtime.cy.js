describe('Page loading time', () => {
  it('Measure the time it takes to load the products page', () => {
    // Set the page URL to load
    const pageUrl = 'http://localhost:3000/products';

    // Start measuring time
    const startTime = Date.now();

    // Load the page
    cy.visit(pageUrl);
    cy.get('body').should('be.visible');

    // Calculate the time length and log it
    cy.window().then((win) => {
      const pageLoadTime = Date.now() - startTime;
      cy.log(`Page loaded in ${pageLoadTime}ms`);
    });
  });
});