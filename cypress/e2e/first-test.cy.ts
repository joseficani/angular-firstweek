describe('My First Cypress Test', () => {
  it('Visits the main page and checks the title', () => {
    cy.visit('http://localhost:4200'); 
    // cy.title().should('include', 'Angular'); 
  });
});
